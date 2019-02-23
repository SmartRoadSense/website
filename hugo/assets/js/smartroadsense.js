/* SmartRoadSense */

function thousands_commas(input, adapt = true) {
    let unit = '';
    let n = input;
    if(input >= 10000000 && adapt) {
        n = input / 1000000.0;
        unit = 'M';
    }
    else if(input >= 10000 && adapt) {
        n = input / 1000.0;
        unit = 'K';
    }

    return (Math.round(n * 100) / 100).toFixed(1) + unit;
}

// Taken from https://stackoverflow.com/a/33928558/3118
function copy_to_clipboard_legacy(text) {
    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();

        try {
            return document.execCommand("copy"); // Security exception may be thrown by some browsers
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
    else {
        return false;
    }
}
async function copy_to_clipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path
        return clipboardData.setData("Text", text);
    }
    else if(navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        }
        catch(err) {
            console.warn('Failed using navigator.clipboard copy.', err);
            return copy_to_clipboard_legacy(text);
        }
    }
    else {
        return copy_to_clipboard_legacy(text);
    }
}

function update_stats() {
    $.getJSON("/ws/count.php", function(json) {
        var raw = json.count_raw;
        var aggregated = json.count_aggregate;

        var kilometres = aggregated * 20 / 1000.0;
        var axis_data = raw * 300;

        $('.data-accel-values').text(thousands_commas(axis_data));
        $('.data-points').text(thousands_commas(raw));
        $('.data-roads').text(thousands_commas(kilometres, false));
    });
}

function srs_onscroll(eventObject, quick) {
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 10) {
        $('nav.navbar').addClass('scrolled');
    }
    else {
        $('nav.navbar').removeClass('scrolled');
    }
}

$(document).ready(function() {
    // Scroll observers
    const itemScrollObserver = new IntersectionObserver(function(entries, obs) {
        entries.forEach(entry => {
            console.log('Observed item ' + entry.target + ', intersection ratio ' + entry.intersectionRatio);
            if(entry.intersectionRatio >= 0.5) {
                $(entry.target).removeClass('scroll-in');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.scroll-in').forEach(item => {
        itemScrollObserver.observe(item);
    });

    $(window).scroll(srs_onscroll);

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
    $('.bibliography .bibtex-link a').click(async function(event) {
        var bib = $(this).data('bibtex');
        $('.bibliography .bibtex').fadeIn().find('.output').text(bib);

        if(await copy_to_clipboard(bib))
            $('.bibliography .bibtex .copy-confirmation').show();
        else
            $('.bibliography .bibtex .copy-confirmation').hide();
    });
});
