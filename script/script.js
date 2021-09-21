$(() => {

    // Variables
    const aboutBTNS = [
        { link: $('.aboutNAV'), place: "#about", classed: ".aboutNAV" },
        { link: $('header section .left .link') },
        { link: $('.mobAbout') },
    ];

    const homeBTNS = [
        { link: $('.homeNAV'), place: "#home", classed: ".homeNAV" },
        { link: $('.goUp') },
        { link: $('.mobHome') },
    ];

    const sympBTNS = [
        { link: $('.sympNAV'), place: "#symp", classed: ".sympNAV" },
        { link: $('.mobSymp') },
    ];
    const preventBTNS = [
        { link: $('.prevNAV'), place: "#prevent", classed: ".prevNAV" },
    ];

    // Move Between Sections
    applyFn(aboutBTNS);
    applyFn(homeBTNS);
    applyFn(sympBTNS);
    applyFn(preventBTNS);

    function scrollFN(scrollTo, classed) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top
        }, 100);
        $('.stickyNav ul li').removeClass('active');
        $('.homeNAV').removeClass('active');
        $(classed).addClass('active');
    }

    function applyFn(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].link.click(() => {
                scrollFN(arr[0].place, arr[0].classed)
            });
        }
    }

    // Sticky Nav
    $(document).scroll(() => {
        if ($(window).scrollTop() > 100) {
            $('nav').addClass('stickyNav');
            $('.goUp').fadeIn();
        } else {
            $('nav').removeClass('stickyNav');
            $('.goUp').fadeOut();
        }
    })

    // Mobile Nav
    $('#phoneNavClose').click(mobileNav);
    $('#MNV').click(mobileNav);
    $('.mobileNav ul li').click(mobileNav);

    function mobileNav() {
        $('.mobileNav').fadeToggle();
    }
})