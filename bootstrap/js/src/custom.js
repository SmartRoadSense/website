/* Custom javascript */
$(document).ready(function() {
    var listOfScrollableElements = [];
    $('.scroll-in').each(function(index, element) {
        var yPos = $(element).offset().top;
        console.log('Element ' + element.innerHTML + ' at Y '+ yPos);

        listOfScrollableElements.push({
            element: element,
            yOffset: yPos
        });
    });
    console.log(listOfScrollableElements.length + ' elements');
    listOfScrollableElements.sort(function(a, b) { return a.yOffset - b.yOffset; });

    console.log(listOfScrollableElements);

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
                console.log('Scrolled in' + listOfScrollableElements[0].element.innerHTML);

                listOfScrollableElements.splice(0, 1);
                console.log(listOfScrollableElements.length + ' elements');
            }
        }
    });

    // Navbar collapse/expand
    $('nav.navbar').on('show.bs.collapse', function () {
        $('nav.navbar').addClass('expanded');
    })
    $('nav.navbar').on('hide.bs.collapse', function () {
        $('nav.navbar').removeClass('expanded');
    })
});
