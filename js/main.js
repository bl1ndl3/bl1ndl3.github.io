
    	$( document ).ready( function() {

            var entries = [
                { label: 'Java Script', url: '', target: '_top', tooltip: 'Programming Language' },
                { label: 'Jquery', url: '', target: '_top', tooltip: 'Programming Language' },
                { label: 'Java (Android)', url: 'http://www.flashforum.de/', target: '_top', tooltip: 'Programming Language' },
                { label: 'C#', url: 'http://www.jqueryscript.net/', target: '_top' , tooltip: 'Programming Language'},
                { label: 'ASP.Net', url: 'http://forum.jswelt.de/', target: '_top' , tooltip: 'Programming Language'},
                { label: 'HTML', url: 'http://codepen.io/', target: '_top', tooltip: 'Programming Language' },
                { label: 'CSS', url: 'http://threejs.org/', target: '_top' , tooltip: 'Programming Language'},
                { label: 'Angular JS', url: 'http://gulpjs.com/', target: '_top', tooltip: 'Programming Language' },
                { label: 'SQL', url: 'http://gulpjs.com/', target: '_top', tooltip: 'Programming Language' },
                { label: 'KnockOut', url: 'http://www.jqueryrain.com/', target: '_top' , tooltip: 'Programming Language' },

                { label: 'Sql Server', url: 'https://jsfiddle.net/user/NiklasKnaack/fiddles/', target: '_top' , tooltip: 'Programming tool' },
                { label: 'My Sql', url: 'http://jquery-plugins.net/', target: '_top' , tooltip: 'Programming tool' },
                { label: 'Visual Studio', url: 'https://goo.gl/', target: '_top' , tooltip: 'Programming tool' },
                { label: 'CodePen', url: 'http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx', target: '_top' , tooltip: 'Programming tool' },
                { label: 'JSFiddle', url: 'https://twitter.com/niklaswebdev', target: '_top' , tooltip: 'Programming tool' },
                { label: 'Chrome debug', url: 'http://createjs.com/', target: '_top' , tooltip: 'Programming tool' },

                { label: 'Test Flight', url: 'http://jsperf.com/', target: '_top' , tooltip: 'Test tool' },

                { label: 'IONIC', url: 'http://webglstudio.org/', target: '_top' , tooltip: 'Framework' },
                { label: 'Bootstrap', url: 'http://jquery-plugins.net/', target: '_top' , tooltip: 'Framework' },

                { label: 'Node.js', url: 'http://jscompress.com/', target: '_top' , tooltip: 'Platform' },
                { label: 'Cordova', url: 'https://tinypng.com/', target: '_top' , tooltip: 'Platform' },

                { label: 'Gradle', url: 'http://caniuse.com/', target: '_top' , tooltip: 'build tools' },

                { label: 'Stack OverFlow', url: 'http://nkunited.deviantart.com/', target: '_top' , tooltip: 'web of knowledge' },
                { label: 'DroidSans', url: 'https://www.shadertoy.com/', target: '_top' , tooltip: 'web of knowledge' },
                { label: 'Medium.com', url: 'http://gamua.com/starling/', target: '_top' , tooltip: 'web of knowledge' },
                { label: 'google', url: 'http://gamua.com/starling/', target: '_top' , tooltip: 'web of knowledge' },

                { label: 'GitHub', url: 'https://github.com/', target: '_top' , tooltip: 'Version control' },
                { label: 'Firebase', url: 'https://github.com/', target: '_top' , tooltip: 'Push Notification' },

                { label: 'Generate qrCode', url: 'http://foundation.zurb.com/', target: '_top' , tooltip: 'library' },
                { label: 'd3js', url: 'http://foundation.zurb.com/', target: '_top' , tooltip: 'library' },
                { label: 'Geolocation', url: 'http://julian.com/research/velocity/', target: '_top' , tooltip: 'library' },
                { label: 'Calendar', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_top' , tooltip: 'library' },
                { label: 'Chart', url: 'https://jquery.com/', target: '_top' , tooltip: 'library' },
                { label: 'Organization Chart', url: 'http://jquery-plugins.net/', target: '_top' , tooltip: 'library' },

                { label: 'Stored procedure', url: 'http://gulpjs.com/', target: '_top', tooltip: '' }
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
                fontWeight: 'normal',//bold
                fontStyle: 'normal',//italic 
                fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                fontToUpperCase: true,
                tooltipFontFamily: 'Oswald, Arial, sans-serif',
                tooltipFontSize: '16',
                tooltipFontColor: '#fff',
                tooltipFontWeight: 'normal',//bold
                tooltipFontStyle: 'normal',//italic 
                tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                tooltipFontToUpperCase: false,
                tooltipTextAnchor: 'middle',
                tooltipDiffX: 0,
                tooltipDiffY: 35

            };

            //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
            $( '#holder' ).svg3DTagCloud( settings );
		} );