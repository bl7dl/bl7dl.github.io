
            (function(window) {
                var dataPlayer = window.mtddata_URvsC
                if (dataPlayer) {
                    
                    dataPlayer.container_id = "mtdblock-URvsC"
                    dataPlayer.unique = "URvsC"
                    

                    // window.onload = function() {
                        if (window.playerIframe) {
                            window.playerIframe(window, dataPlayer)
                        } else {
                            var tags = window.document.getElementsByTagName("scripts")
                            var scrs = []
                            for (var i = 0; i < tags.length; i++) {scrs.push(tags[i])}
                            var scriptPixels = scrs.find(function(curScr) {
                                return /\/js\/player\-iframe\-f\.js/.test(curScr.src)
                            })

                            if (scriptPixels) {
                                startScr()
                            } else {
                                var scr = window.document.createElement("script")
                                scr.src = "../https@adserver.otm-r.com/js/player-iframe-f.js"
                                scr.onload = function() {
                                    window.playerIframe(window, dataPlayer)
                                }

                                window.document.body.appendChild(scr)
                            }
                        }
                    // }
                }

                function startScr() {
                    console.log(window.playerIframe, dataPlayer)
                    if (window.playerIframe) 
                        window.playerIframe(window, dataPlayer)
                    else
                        setTimeout(startScr, 1);
                }

                setPixels()
                function setPixels() {
                    var tags = window.document.getElementsByTagName("script")
                    var scrs = []
                    for (var i = 0; i < tags.length; i++) {scrs.push(tags[i])}
                    var scriptPixels = scrs.find(function(curScr) {
                        return /\/\/sync\.dmp\.otm\-r\.com\/match\/aotm\.js/.test(curScr.src)
                    })

                    if (!scriptPixels) {
                        var scr = window.document.createElement("script")
                        scr.src = "../https@sync.dmp.otm-r.com/match/aotm.js"
                        scr.async = true

                        window.document.body.appendChild(scr)
                    }
                }

                var divContainer = window.document.getElementById(dataPlayer.container_id)
                if (divContainer) {
                    divContainer.style.height = "0px"
                    divContainer.style.padding = "0px"
                    divContainer.style.margin = "0px"
                }
            })(window)
        