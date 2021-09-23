$(() => {
    var isDark = false;
    var BTN = $('.darkMood');

    var mainColors = ["--pop-text-color", "--pop-hover-color", "--pop-light-color"];

    var colorsNames = ["--main-color",
        "--second-color",
        "--head-color",
        "--head-second-color",
        "--normal-font-color",
    ];

    var darkValues = ["#161616",
        "rgb(0, 0, 0)",
        "#ffffff",
        "#a7a7a7",
        "#fff",
    ];

    var lightValues = ["#f7f9fe",
        "#fff",
        "#394B6C",
        "#4B6691",
        "#000",
    ];

    BTN.click(() => {
        isDark = !isDark;
        var colorValues = (!isDark) ? lightValues : darkValues;
        addColors(colorsNames, colorValues)
    });

    function addColors(colorName, value) {
        for (var i = 0; i < colorName.length; i++) {
            $(':root').css(colorName[i], value[i]);
        }
    }

    $('.colorizing .blue').click(function() {
        addColors(mainColors, ["#2a81ea", "#165fb8", "#73E3ff"])
    })

    $('.colorizing .red').click(function() {
        addColors(mainColors, ["#e61f33", "#8f0f1c", "#ffb6bd"])
    })

    $('.colorizing .purble').click(function() {
        addColors(mainColors, ["#e70f62", "#aa0f4a", "#faa1c3"])
    })

    $('.colorizing .cyan').click(function() {
        addColors(mainColors, ["#06d38e", "#0f835c", "#c2ffeb"])
    })

})