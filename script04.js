/*global $ */
/*global document*/

$(document).ready(function () {
    "use strict";
    $("input:text").focus(function () {
        $(this).val("");
    });
    $("input:text").focus(function () {
        $(this).animate({"background-color" : "#fff"});
        $(this).animate({"color" : "#282320"});
    });

    $("input:text").blur(function () {
        $(this).animate({"background-color" : "#282320"});
        $(this).animate({"color" : "#43BFC7"});
    });
});

$(document).ready(function () {
    "use strict";
    $("#form-content").focus(function () {
        $(this).animate({"background-color" : "#fff"});
        $(this).animate({"color" : "#282320"});
    });
    $("#form-content").blur(function () {
        $(this).animate({"background-color" : "#282320"});
        $(this).animate({"color" : "#43BFC7"});
    });
});

$(document).ready(function () {
    "use strict";
    $("#button").hover(function () {
        $(this).stop().animate({"background-color" : "#43BFC7"});
    },
        function () {
            $(this).stop().animate({"background-color" : "#fff"});
        });
});
