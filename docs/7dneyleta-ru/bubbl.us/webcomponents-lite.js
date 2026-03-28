<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page not found 404</title>

    <link href="/css/normalize.css" media="all" rel="stylesheet" type="text/css">


<style>

    body {
        background-color:#EBF0F5;
        margin: 0;
        padding: 0;
        font-family:'PT Sans', Tahoma, Verdana, Segoe, sans-serif;
        font-size: 16px;
        letter-spacing: 0px;

        -webkit-animation-delay: 0.1s;
        -webkit-animation-name: fontfix;
        -webkit-animation-duration: 0.1s;
        -webkit-animation-iteration-count: 1;
        -webkit-animation-timing-function: linear;
    }

    div.narrow {
        position: relative;
        width: 464px;
        clear: none;
        height: 225px;
        padding:0px;
        margin-top:100px;
        border-radius:20px;
        overflow: hidden;
        text-align: center;

        background: -moz-linear-gradient(top,  rgba(148,148,148,0.05) 0%, rgba(148,148,148,0.2) 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(148,148,148,0.05)), color-stop(100%,rgba(148,148,148,0.2)));
        background: -webkit-linear-gradient(top,  rgba(148,148,148,0.05) 0%,rgba(148,148,148,0.2) 100%);
        background: -o-linear-gradient(top,  rgba(148,148,148,0.05) 0%,rgba(148,148,148,0.2) 100%);
        background: -ms-linear-gradient(top,  rgba(148,148,148,0.05) 0%,rgba(148,148,148,0.2) 100%);
        background: linear-gradient(to bottom,  rgba(148,148,148,0.05) 0%,rgba(148,148,148,0.2) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0d949494', endColorstr='#33949494',GradientType=0 );

        border: 2px solid white;
        box-shadow:0 4px 20px 0px rgba(0,0,0,0.25);
    }

    div.narrow h3 {
        font-size:177%;
        margin: 14px;
        text-align: center;
        position: relative;
        color:#48b4e1;
        font-family: "Nunito", "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
        font-weight:normal;
    }

</style>

<!-- Added to make v3 compat -->
<script>

	// parent window has shell
	if ( window.parent && window.parent.shell ) {

        window.parent.shell.tabLoaded( window, document.title );

    }

</script>
</head>
<body>

<div style="margin:auto;width:464px;padding:20px;">
    <a href="/" style="border-bottom: 0">
        <img src="/images/logoBig.png"/>
    </a>
    <div class="narrow">
        <h3>
            Page not found
        </h3>
        We can't find the page you are looking for.
        <br/><br/>
        Check out our <a href="https://bubbl.us/help/">Help Section</a> for
        help, or head <a href="https://bubbl.us">back home.</a>
    </div>
</div>


</body>
</html>