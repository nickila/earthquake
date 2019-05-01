$(document).ready(function () {
    $(".map-div").on("click", function (event) {
        var offset = $(this).parent().offset()
        var x = event.pageX - offset.left;
        var y = event.pageY - offset.top;
        // alert("x = " + x + "and y = " + y)
        if (x < 345 && x > 315 && y < 357 && y > 335) {
            $("#red-overlay").addClass("show")
        }
        if (x < 1015 && x > 989 && y < 228 && y > 205) {
            $("#orange-overlay-one").addClass("show")
        }
        if (x < 700 && x > 675 && y < 300 && y > 280) {
            $("#orange-overlay-two").addClass("show")
        }
        if (x < 898 && x > 873 && y < 382 && y > 375) {
            $("#orange-overlay-three").addClass("show")
        }
    })
    $(".close-overlay").on("click", function () {
        $("#red-overlay").removeClass("show")
        $(this).parent().removeClass("show")
    })

}) 