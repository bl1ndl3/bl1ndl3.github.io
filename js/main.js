
$(document).ready(function () {

    var entries = [
        { label: 'Java Script', url: '', target: '_top', tooltip: 'Programming Language' },
        { label: 'Jquery', url: '', target: '_top', tooltip: 'Programming Language' },
        { label: 'Java (Android)', url: '', target: '_top', tooltip: 'Programming Language' },
        { label: 'C#', url: '', target: '_top', tooltip: 'Programming Language' },
        { label: 'ASP.Net', url: '', target: '_top', tooltip: 'Programming Language' },
        { label: 'HTML', url: '', target: '_top', tooltip: 'Programming Language' },
        { label: 'CSS', url: '', target: '_top', tooltip: 'Programming Language' },
        { label: 'Angular JS', url: '', target: '_top', tooltip: 'Programming Language' },
        { label: 'SQL', url: '', target: '_top', tooltip: 'Programming Language' },
        { label: 'KnockOut', url: '', target: '_top', tooltip: 'Programming Language' },

        { label: 'Sql Server', url: '', target: '_top', tooltip: 'Programming tool' },
        { label: 'My Sql', url: '', target: '_top', tooltip: 'Programming tool' },
        { label: 'Visual Studio', url: '', target: '_top', tooltip: 'Programming tool' },
        { label: 'CodePen', url: '', target: '_top', tooltip: 'Programming tool' },
        { label: 'JSFiddle', url: '', target: '_top', tooltip: 'Programming tool' },
        { label: 'Chrome debug', url: '', target: '_top', tooltip: 'Programming tool' },

        { label: 'Test Flight', url: '', target: '_top', tooltip: 'Test tool' },

        { label: 'IONIC', url: '', target: '_top', tooltip: 'Framework' },
        { label: 'Bootstrap', url: '', target: '_top', tooltip: 'Framework' },

        { label: 'Node.js', url: '', target: '_top', tooltip: 'Platform' },
        { label: 'Cordova', url: '', target: '_top', tooltip: 'Platform' },

        { label: 'Gradle', url: '', target: '_top', tooltip: 'Build tools' },

        { label: 'Stack OverFlow', url: '', target: '_top', tooltip: 'Web of knowledge' },
        { label: 'DroidSans', url: '', target: '_top', tooltip: 'Web of knowledge' },
        { label: 'Medium.com', url: '', target: '_top', tooltip: 'Web of knowledge' },
        { label: 'google', url: '', target: '_top', tooltip: 'Web of knowledge' },

        { label: 'GitHub', url: '', target: '_top', tooltip: 'Version control' },
        { label: 'Firebase', url: '', target: '_top', tooltip: 'Push Notification' },

        { label: 'Generate qrCode', url: '', target: '_top', tooltip: 'Library' },
        { label: 'd3js', url: '', target: '_top', tooltip: 'Library' },
        { label: 'Geolocation', url: '', target: '_top', tooltip: 'Library' },
        { label: 'Calendar', url: '', target: '_top', tooltip: 'Library' },
        { label: 'Chart', url: '', target: '_top', tooltip: 'Library' },
        { label: 'Organization Chart', url: '', target: '_top', tooltip: 'Library' },

        { label: 'Stored procedure', url: '', target: '_top', tooltip: '' }
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
    $('#holder').svg3DTagCloud(settings);

    $('.menu-intro').click(function () { scrollTo('sakura'); });
    $('.menu-skills').click(function () { scrollTo('holder'); });
    $('.menu-skills').click(function () { scrollTo('holder'); });


    $(window).scroll(function () {
        clearTimeout(window.scroller);
        window.scroller = setTimeout(function () {
            try {
                var scroll = $(window).scrollTop();
                var scrollSkill = $('#holder').offset().top;
                scrollSkill -= 100;
                if (scroll >= scrollSkill) {
                    $('body').addClass('theme-dark');
                } else {
                    $('body').removeClass('theme-dark');
                }
            } catch (error) { }
        });

    });


    setTimeout(() => {
        $("html, body").stop().animate({ scrollTop: 0 }, 500, 'swing', function () { });
    }, 300);
});

window.scrollTo = function (elem) {
    var elem = $('#' + elem);
    var eTop = elem && elem.offset() && elem.offset().top ? elem.offset().top : 0;
    $("html, body").stop().animate({ scrollTop: eTop }, 500, 'swing', function () { });
}
