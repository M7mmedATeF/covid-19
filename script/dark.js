$(() => {
    var isDark = false;
    var BTN = $('.darkMood');

    var colorsNames = ["--main-color",
        "--second-color",
        "--head-color",
        "--head-second-color",
        "--pop-text-color",
        "--pop-hover-color",
        "--normal-font-color",
    ]

    var darkValues = ["#161616",
        "rgb(0, 0, 0)",
        "#ffffff",
        "#a7a7a7",
        "#2a81ea",
        "#165fb8",
        "#fff",
    ]

    var lightValues = ["#f7f9fe",
        "#fff",
        "#394B6C",
        "#4B6691",
        "#2a81ea",
        "#165fb8",
        "#000",
    ]

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
})