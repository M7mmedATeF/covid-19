$(() => {
    /*--------------------------- BTNs & Articls ---------------------------*/
    /* Variabls */
    var articlBTNs = $('.question .innerQuestions .right .inner .aricleToggleBTN');
    var articles = $('.question .innerQuestions .right .inner div');
    var icons = $('.question .innerQuestions .right .inner .aricleToggleBTN .icon');
    /* Finction */
    articlBTNs.click(function() {

        articlBTNs.removeClass('active');

        articles.slideUp();
        this.children[1].innerHTML = "<i class=\"fas fa-plus\"></i>";
        icons.html("<i class=\"fas fa-plus\"></i>");

        if ($(this).next().css("display") == "none") {
            $(this).next().slideDown();
            this.children[1].innerHTML = "<i class=\"fas fa-minus\"></i>";
            $(this).addClass('active');
        } else {
            $(this).next().slideUp();
            this.children[1].innerHTML = "<i class=\"fas fa-plus\"></i>";
        }

    })

    /*--------------------------- BTNs & Articls ---------------------------*/
    /* Variabls */
    var sideBTNs = [$('.question .innerQuestions .left #btn1'),
        $('.question .innerQuestions .left #btn2'),
        $('.question .innerQuestions .left #btn3'),
        $('.question .innerQuestions .left #btn4'),
        $('.question .innerQuestions .left #btn5'),
        $('.question .innerQuestions .left #btn6'),
    ];
    var allSideBTNs = $('.question .innerQuestions .left button');
    var sections = [
        $('.question .innerQuestions .right #sec1'),
        $('.question .innerQuestions .right #sec2'),
        $('.question .innerQuestions .right #sec3'),
        $('.question .innerQuestions .right #sec4'),
        $('.question .innerQuestions .right #sec5'),
        $('.question .innerQuestions .right #sec6')
    ];
    var allSections = $('.question .innerQuestions .right .inner');



    for (var i = 0; i < sideBTNs.length; i++) {
        sideBTNs[i].click(function() {
            allSideBTNs.removeClass('active');
            $(this).addClass('active');

            var x = getINDEX($(this));
            console.log(x)
            allSections.fadeOut();
            sections[x].fadeIn();
            //sections[i].fadeIn();
        })
    }

    function getINDEX(x) {
        for (var i = 0; i < sideBTNs.length; i++) {
            if (x == sideBTNs[x]) {
                return i;
            }
        }
        return 0;
    }

})