jQuery(document).ready(function () {
    buttonFunction();
});

function buttonFunction () {
    jQuery(".button").on("click", function () {
        jQuery(this).siblings().removeClass("active");
        jQuery(this).toggleClass("active");

    });
}