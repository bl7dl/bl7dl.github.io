(function(window) {
    window.playerIframe = function(window, dataPlayer) {
        if (!dataPlayer.container_id) dataPlayer.container_id = 'mtdblock-player'

        var classNameFrame = "mtdblock-div-frame-" + dataPlayer.container_id
        var classNameFull = "mtdblock-div-full-" + dataPlayer.container_id
        var classNameHide = "mtdblock-div-hide-" + dataPlayer.container_id

        var style = window.document.createElement('style')
        style.type = 'text/css'
        style.innerHTML = '.' + classNameFrame + ' {\n\
                    padding: 0px;\n\
                    margin: 0px; \n\
                    height: 0px;\n\
                }\n\
            \n\
                .' + classNameFull + ' {\n\
                    transition: height 400ms ease-in-out;\n\
                    padding: 0px;\n\
                    margin: 0px; \n\
                    height: ' + dataPlayer.height + 'px;\n\
                }\n\
            \n\
                .' + classNameHide + ' {\n\
                    transition: height 500ms ease-in-out;\n\
                    padding: 0px;\n\
                    margin: 0px; \n\
                    height: 0px;\n\
                }'

        window.document.body.appendChild(style)


        var host = dataPlayer.enviroment && dataPlayer.enviroment === 'development' ?
            'otm-test.iageengineering.net' : 'adserver.otm-r.com'

        var queryDomainAndPage = ''
        if (dataPlayer.domain) queryDomainAndPage += '&domain=' + dataPlayer.domain
        if (dataPlayer.page) queryDomainAndPage += '&page=' + encodeURIComponent(dataPlayer.page)

        var pageOrigin = window.document.location.origin
        var iframeOrigin = window.document.location.protocol + '//' + host

        var socketXDM

        var wasConnected = false
        var wasContentStop = false
        var startedVideo = false
        var wasAddedIframe = false
        var isFocusPage = true
        var isFocusFrame = false
        var iframe
        var divCont
        var vastText = ''
        var isStart = false


        window.onfocus = function() {
            if (!wasContentStop && socketXDM) {
                isFocusPage = true
                socketXDM.postMessage(JSON.stringify({container_id: dataPlayer.container_id, message: "FocusPageTrue"}))
            }
        }

        window.onblur = function() {
            if (!wasContentStop && socketXDM) {
                isFocusPage = false
                socketXDM.postMessage(JSON.stringify({container_id: dataPlayer.container_id, message: "FocusPageFalse"}))
            }
        }

        window.onmousemove = function() {
            if (!isFocusPage && !wasContentStop) {
                window.focus()
            }
        }

        // проверяем есть ли скрипты нужные для работы
        if (window.isXDMMesseger && window.isDeviceScrpt) {

            // тута запуск скрипта
            getRequest()
        } else {

            // ищим начали-ли загружать скрипт
            var scrs = window.document.getElementsByTagName('scripts')
            if (scrs.length) {
                var isScrs = {xdm: false, dev: false}
                for (var i = 0; i < scrs.length; i++) {
                    if (isScrs.xdm && isScrs.dev) break

                    if (!isScrs.xdm && /\/js\/easyXDM\.min\.js/.test(scrs[i].src)) {
                        isScrs.xdm = true
                        continue
                    }

                    if (!isScrs.dev && /\/js\/device\.min\.js/.test(scrs[i].src)) isScrs.dev = true
                }

                if (!isScrs.xdm && !isScrs.dev) {
                    addScripts()
                } else {

                    // ожидаем загрузки скриптов
                    waitingLoadScr()
                }
            } else {
                addScripts()
            }
        }

        function waitingLoadScr() {
            if (window.isXDMMesseger && window.isDeviceScrpt) {
                getRequest()
            } else {
                setTimeout(waitingLoadScr, 1)
            }
        }

        function addScripts() {
            var counter = 0
            var countScr = 2

            var scriptDev = window.document.createElement('script')
            scriptDev.src = '../https@/' + host + '/js/device.min.js'
            scriptDev.onload = startThisScript

            window.document.body.appendChild(scriptDev)

            var scrEasyXDM = window.document.createElement('script')
            scrEasyXDM.src = '../https@/' + host + '/js/easyXDM.min.js'
            scrEasyXDM.onload = startThisScript

            window.document.body.appendChild(scrEasyXDM)

            function startThisScript() {
                if (++counter === countScr) {
                    window.isXDMMesseger = true
                    window.isDeviceScrpt = true
                    getRequest()
                }
            }
        }

        function getRequest() {
            var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

            var xhr = new XHR()
            xhr.withCredentials = true

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (/VAST|vast/.test(xhr.responseText)) {
                        vastText = xhr.responseText
                        runScripts()
                    }
                }
            }

            xhr.open('GET', iframeOrigin + '/get?site_id=' + dataPlayer.site_id
                + '&placement_id=' + dataPlayer.placement_id + queryDomainAndPage, true)

            xhr.send(null)
        }

        function runScripts(div) {
            if (!div) div = document.getElementById(dataPlayer.container_id)
            if (!wasAddedIframe && !iframe && div) {
                wasAddedIframe = true
                divCont = div
                plaeyrShow(div)
            }

            if (!wasContentStop) {
                var coordBlock = div.getBoundingClientRect()
                var lengthY = document.documentElement.clientHeight

                var percent50 = dataPlayer.height / 2

                if ((isFocusPage || isFocusFrame) && coordBlock &&
                    (0 <= coordBlock.top && (lengthY - percent50) >= coordBlock.top ||
                    iframe && coordBlock.top < 0 && coordBlock.bottom >= percent50)) {

                    if (startedVideo && iframe.className !== classNameFull) {
                        div.style.height = "auto"
                        setTimeout(function() {iframe.className = classNameFull}, 20)
                    }

                    if (iframe && !isStart) {
                        if (startedVideo) iframe.className = classNameFull
                        isFocusPage = true
                        isStart = true
                        socketXDM.postMessage(JSON.stringify({container_id: dataPlayer.container_id, message: "videoPlay"}))
                    } else {
                        if (isStart && wasConnected) {
                            socketXDM.postMessage(JSON.stringify({container_id: dataPlayer.container_id, message: "videoPlay"}))
                        }
                    }
                } else {
                    if (wasConnected && isStart) {
                        socketXDM.postMessage(JSON.stringify({container_id: dataPlayer.container_id, message: "videoStop"}))
                    }
                }

                setTimeout(runScripts, 10, div);
            }
        }

        function plaeyrShow(div) {
            var pathIframe = iframeOrigin + '/player/iframe?placement_id=' + dataPlayer.placement_id +
                '&site_id=' + dataPlayer.site_id + '&origin=' + encodeURIComponent(pageOrigin) + '&href=' +
                encodeURIComponent(window.document.location.href) + '&width=' + dataPlayer.width +
                '&height=' + dataPlayer.height + (window.device.mobile() || window.device.tablet() ? '&mob=1' : '') +
                (dataPlayer.unique ? '&unique=' + dataPlayer.unique : '') + queryDomainAndPage

            socketXDM = new window.easyXDM.Socket({
                remote: pathIframe,
                container: div,
                size_frame: {width: dataPlayer.width, height: dataPlayer.height},
                onMessage: function(message, origin) {

                    if (!iframe) {
                        var markGetIframe = setInterval(function(blockCont) {
                            if (div.children.length) {
                                clearInterval(markGetIframe)
                                iframe = div.children[0]
                                iframe.className = classNameFrame
                            }
                        }, 1, this.container)                    
                    }

                    if (origin !== iframeOrigin) {
                        return
                    }

                    message = JSON.parse(message)

                    if (message.container_id !== dataPlayer.container_id) return

                    if (message.message === 'FocusFrameTrue') {
                        isFocusFrame = true
                    }

                    if (message.message === 'FocusFrameFalse') {
                        isFocusFrame = false
                    }

                    if (message.message === 'startedVideo') {
                        // console.log('startedVideo')
                        startedVideo = true
                    }

                    if (message.message === 'get-vast-xml') {
                        socketXDM.postMessage(JSON.stringify({container_id: dataPlayer.container_id, message: vastText}))
                    }

                    if (message.message === 'connect') {
                        socketXDM.postMessage(JSON.stringify({container_id: dataPlayer.container_id, message: "initFrame"}))
                        wasConnected = true
                    }

                    if (message.message === 'hloppp') {
                        wasContentStop = true
                        if (div) {
                            iframe.className = classNameHide
                            setTimeout(function(divCont) {
                                divCont.style.display = 'none'
                                divCont.parentNode.removeChild(divCont)
                            }, 1000, div)
                        }

                    }
                }
            })
        }
    }
})(window)
