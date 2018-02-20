/* SmartRoadSense */

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
});
