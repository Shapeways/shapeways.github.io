/**
 * Created with PyCharm.
 * User: matt
 * Date: 4/7/16
 * Time: 7:13 PM
 */

$(document).ready(function() {

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