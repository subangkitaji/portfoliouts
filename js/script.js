//event pada saatlink diklik
$("a[href^='#']").click(function (e) {

    e.preventDefault();

    var position =
        $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    });


});

function checkWidth(init) {
    /*If browser resized, check width again */
    if ($(window).width() < 514) {
        $("#icon").addClass('fa-2x');
    } else {
        if (!init) {
            $("#icon").removeClass('fa-2x');
        }
    }
}

$(document).ready(function () {
    checkWidth(true);

    $(window).resize(function () {
        checkWidth(false);
    });
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 376 && scroll <= 1220) {
        $("a[href^='#about']").addClass('active');
    } else if (scroll >= 1221 && scroll <= 3506) {
        $("a[href^='#work']").addClass('active');
    } else if (scroll >= 3507 && scroll <= 4178) {
        $("a[href^='#contact']").addClass('active');
    } else {
        $("a[href^='#about']").removeClass('active');
        $("a[href^='#work']").removeClass('active');
        $("a[href^='#contact']").removeClass('active');
    }
});