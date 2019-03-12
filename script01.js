/*global $ */
/*global document*/
/*global window*/



$(window).scroll(function () {
    "use strict";
    var x = $(this).scrollTop();
    if (x > 50) {
        $(".img1").animate({"opacity": "1"});
    }
});

$(window).scroll(function () {
    "use strict";
    var x = $(this).scrollTop();
    if (x > 125) {
        $(".img2").animate({"opacity": "1"});
    }
});

$(window).scroll(function () {
    "use strict";
    var x = $(this).scrollTop();
    if (x > 200) {
        $(".img3").animate({"opacity": "1"});
    }
});

$(window).scroll(function () {
    "use strict";
    var x = $(this).scrollTop();
    if (x > 400) {
        $(".img4").animate({"opacity": "1"});
    }
});

