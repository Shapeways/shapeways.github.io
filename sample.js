/**
 * Created with PyCharm.
 * User: matt
 * Date: 4/7/16
 * Time: 7:13 PM
 */

var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

$(document).ready(function() {
    console.log("Ready!");

    var first = getUrlParameter('fname');
    var last = getUrlParameter('lname');

    if(first) {
//        console.log("First: " + first);
//        console.log("Last: " + last);
        $(".display-firstname").text(first);
        $(".display-lastname").text(last);
        $(".form-result").show();
    }

    $("#unhide").click(function() {
        if($(".hidden-div").is(":hidden")) {
            $(".hidden-div").show();
            $(this).text('Hide me quick!');
        } else {
            $(".hidden-div").hide();
            $(this).text("Can't see me!");
        }
    });

    $(".login-example").submit(function() {
       console.log("submit!")
    });


});
