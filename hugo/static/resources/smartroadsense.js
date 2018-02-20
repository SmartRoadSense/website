/* SmartRoadSense */

function thousands_commas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function update_stats() {
    $.getJSON("http://www.smartroadsense.it/ws/count.php", function(json) {
        var raw = json.count_raw;
        var aggregated = json.count_aggregate;

        var kilometres = aggregated * 20 / 1000;
        var axis_data = raw * 300;

        $('.data-accel-values').text(thousands_commas(axis_data));
        $('.data-points').text(thousands_commas(raw));
        $('.data-roads').text(thousands_commas(kilometres));
    });
}

var listOfScrollableElements = [];

function srs_onscroll(eventObject, quick) {
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 10) {
        $('nav.navbar').addClass('scrolled');
    }
    else {
        $('nav.navbar').removeClass('scrolled');
    }

    if(listOfScrollableElements.length > 0) {
        if(listOfScrollableElements[0].yOffset < (scrollTop + ($(window).height() * 0.9))) {
            if(quick) {
                $(listOfScrollableElements[0].element).addClass('no-trans');
            }
            $(listOfScrollableElements[0].element).removeClass('scroll-in');
            listOfScrollableElements.splice(0, 1);
        }
    }
}

$(document).ready(function() {
    // Build scrollable element list
    $('.scroll-in').each(function(index, element) {
        var yPos = $(element).offset().top;

        listOfScrollableElements.push({
            element: element,
            yOffset: yPos
        });
    });
    listOfScrollableElements.sort(function(a, b) { return a.yOffset - b.yOffset; });

    srs_onscroll(null, true);

    // Scroll handling
    $(window).scroll(srs_onscroll);

    // When/if window resizes, execute all animations since positions are not guaranteed anymore
    $(window).resize(function() {
        for(var i = 0; i < listOfScrollableElements.length; ++i) {
            $(listOfScrollableElements[i].element).addClass('no-trans').removeClass('scroll-in');
        }
        listOfScrollableElements = [];
    });

    // Navbar collapse/expand
    $('nav.navbar').on('show.bs.collapse', function () {
        $('nav.navbar').addClass('expanded');
    })
    $('nav.navbar').on('hide.bs.collapse', function () {
        $('nav.navbar').removeClass('expanded');
    })

    // Stats data loading
    if($('.data-accel-values,.data-points,.data-roads').length > 0) {
        update_stats();
        setTimeout(update_stats, 60000);
    }
});
