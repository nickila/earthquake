$(document).ready(function () {
    $(".map-div").on("click", function (event) {
        var offset = $(this).parent().offset()
        var x = event.pageX - offset.left;
        var y = event.pageY - offset.top;
        // alert("x = " + x + "and y = " + y)
        if (x < 345 && x > 315 && y < 357 && y > 335) {
            $("#red-overlay").addClass("show")
        }

    })
    $(".close-overlay").on("click", function () {
        $("#red-overlay").removeClass("show")
    })

}) 