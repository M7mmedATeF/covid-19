$(() => {

    // Variables
    const homeBTNS = [
        { link: $('.homeNAV'), place: "#home", classed: ".homeNAV" },
        { link: $('.mobHome') },
    ];

    const aboutBTNS = [
        { link: $('.aboutNAV'), place: "#about", classed: ".aboutNAV" },
        { link: $('header section .left .link') },
        { link: $('.mobAbout') },
        { link: $('.about .moveAbout3') },
        { link: $('.mobAbout') },
    ];

    const sympBTNS = [
        { link: $('.sympNAV'), place: "#symp", classed: ".sympNAV" },
        { link: $('.mobSymp') },
        { link: $('.about .moveSymp3') },
        { link: $('.mobSymp') },
    ];

    const preventBTNS = [
        { link: $('.prevNAV'), place: "#prevent", classed: ".prevNAV" },
        { link: $('.about .movePrev3') },
        { link: $('header .linkBTN') },
        { link: $('.mobPrevent') },
    ];

    const treatBTNS = [
        { link: $('.treatNAV'), place: "#treat", classed: ".treatNAV" },
        { link: $('.about .moveTreat3') },
        { link: $('.mobTreat') },
    ];

    const FAQs = [
        { link: $('.faqNAV'), place: "#faq", classed: ".faqNAV" },
        { link: $('.about .moveFAQ3') },
        { link: $('.mobFAQ') },
    ];

    const NEWs = [
        { link: $('.newsNAV'), place: "#news", classed: ".newsNAV" },
        { link: $('.mobNews') },
    ];

    const doDont = [
        { link: $('.doNAV'), place: "#doDont", classed: ".null" },
        { link: $('.mobDo') },
    ];

    // Move Between Sections
    applyFn(aboutBTNS);
    applyFn(homeBTNS);
    applyFn(sympBTNS);
    applyFn(preventBTNS);
    applyFn(treatBTNS);
    applyFn(FAQs);
    applyFn(NEWs);
    applyFn(doDont);

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
        if ($(window).scrollTop() > 20) {
            $('nav').addClass('stickyNav');
            $('.darkMood').fadeIn();
        } else {
            $('nav').removeClass('stickyNav');
            $('.darkMood').fadeOut();
        }
    })

    // Mobile Nav
    var BTN = $('.mobileNavBTN .MNB');
    var mobNavBTN = $('.mobileNav ul li');

    BTN.click(() => {
        mobileNavBTN();
    })
    mobNavBTN.click(() => {
        mobileNavBTN();
    })

    $('#phoneNavClose').click(() => {
        mobileNavBTN();
    })

    function mobileNavBTN() {
        $('.mobileNav').fadeToggle();
    }
})