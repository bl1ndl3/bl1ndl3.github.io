
    	$( document ).ready( function() {

            var entries = [
                { label: 'Java Script', url: 'http://niklasknaack.blogspot.de/', target: '_top' },
                { label: 'Java (Android)', url: 'http://www.flashforum.de/', target: '_top' },
                { label: 'C#', url: 'http://www.jqueryscript.net/', target: '_top' },
                { label: 'ASP.Net', url: 'http://forum.jswelt.de/', target: '_top' },
                { label: 'Sql Server', url: 'https://jsfiddle.net/user/NiklasKnaack/fiddles/', target: '_top' },
                { label: 'My Sql', url: 'http://jquery-plugins.net/', target: '_top' },
                { label: 'HTML', url: 'http://codepen.io/', target: '_top' },
                { label: 'CSS', url: 'http://threejs.org/', target: '_top' },
                { label: 'IONIC', url: 'http://webglstudio.org/', target: '_top' },
                { label: 'NODE JS', url: 'http://jscompress.com/', target: '_top' },
                { label: 'Cordova', url: 'https://tinypng.com/', target: '_top' },
                { label: 'Gradle', url: 'http://caniuse.com/', target: '_top' },
                { label: 'Visual Studio', url: 'https://goo.gl/', target: '_top' },
                { label: 'CodePen', url: 'http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx', target: '_top' },
                { label: 'JSFiddle', url: 'https://twitter.com/niklaswebdev', target: '_top' },
                { label: 'Stack OverFlow', url: 'http://nkunited.deviantart.com/', target: '_top' },
                { label: 'Angular JS', url: 'http://gulpjs.com/', target: '_top' },
                { label: 'GitHub', url: 'https://github.com/', target: '_top' },
                { label: 'DroidSans', url: 'https://www.shadertoy.com/', target: '_top' },
                { label: 'Medium.com', url: 'http://gamua.com/starling/', target: '_top' },
                { label: 'Test Flight', url: 'http://jsperf.com/', target: '_top' },
                { label: 'Generate qrCode', url: 'http://foundation.zurb.com/', target: '_top' },
                { label: 'Chrome debug', url: 'http://createjs.com/', target: '_top' },
                { label: 'Geolocation', url: 'http://julian.com/research/velocity/', target: '_top' },
                { label: 'Calendar', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_top' },
                { label: 'Chart', url: 'https://jquery.com/', target: '_top' },
                { label: 'KnockOut', url: 'http://www.jqueryrain.com/', target: '_top' },
                { label: 'Organization Chart', url: 'http://jquery-plugins.net/', target: '_top' },
                { label: 'Bootstrap', url: 'http://jquery-plugins.net/', target: '_top' }
            ];

            var settings = {
                entries: entries,
                width: 1200,
                height: 1200,
                radius: '65%',
                radiusMin: 75,
                bgDraw: true,
                bgColor: '#000',
                opacityOver: 1.00,
                opacityOut: 0.05,
                opacitySpeed: 6,
                fov: 800,
                speed: 0.5,
                fontFamily: 'Oswald, Arial, sans-serif',
                fontSize: '32',
                fontColor: '#fff',
                fontWeight: 'bold',//bold
                fontStyle: 'normal',//italic 
                fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                fontToUpperCase: true
            };

            //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
            $( '#holder' ).svg3DTagCloud( settings );
		} );