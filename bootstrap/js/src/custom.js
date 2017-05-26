/* Custom javascript */
$(document).ready(function() {
    // Scroll handling
    $(window).scroll(function() {
        if($(document).scrollTop() > 10) {
            $('nav.navbar').addClass('scrolled');
        }
        else {
            $('nav.navbar').removeClass('scrolled');
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
