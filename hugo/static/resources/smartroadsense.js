/* SmartRoadSense */

function thousands_commas(input) {
    let unit = '';
    let n = input;
    if(input >= 1000000.0) {
        n = input / 1000000;
        unit = 'M';
    }
    else if(input >= 1000.0) {
        n = input / 1000;
        unit = 'K';
    }

    return (Math.round(n * 100) / 100).toFixed(1) + unit;
}

// Taken from https://stackoverflow.com/a/33928558/3118
function copy_to_clipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);
    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();

        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
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

    // BibTeX loading
    $('.bibliography .bibtex-link a').click(function(event) {
        var bib = $(this).data('bibtex');
        $('.bibliography .bibtex').fadeIn().find('.output').text(bib);

        if(copy_to_clipboard(bib))
            $('.bibliography .bibtex .copy-confirmation').show();
        else
            $('.bibliography .bibtex .copy-confirmation').hide();
    });
});
