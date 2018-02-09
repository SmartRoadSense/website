/* SmartRoadSense */

$(document).ready(function() {
    var listOfScrollableElements = [];
    $('.scroll-in').each(function(index, element) {
        var yPos = $(element).offset().top;

        listOfScrollableElements.push({
            element: element,
            yOffset: yPos
        });
    });
    listOfScrollableElements.sort(function(a, b) { return a.yOffset - b.yOffset; });

    // Scroll handling
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();
        if(scrollTop > 10) {
            $('nav.navbar').addClass('scrolled');
        }
        else {
            $('nav.navbar').removeClass('scrolled');
        }

        if(listOfScrollableElements.length > 0) {
            if(listOfScrollableElements[0].yOffset < (scrollTop + ($(window).height() * 0.75))) {
                $(listOfScrollableElements[0].element).removeClass('scroll-in');
                listOfScrollableElements.splice(0, 1);
            }
        }
    });

    // When/if window resizes, execute all animations since positions are not guaranteed anymore
    $(window).resize(function() {
        for(var i = 0; i < listOfScrollableElements.length; ++i) {
            $(listOfScrollableElements[i].element).removeClass('scroll-in');
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