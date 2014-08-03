$(function() {

/* =========================================================
 * Design Type DropDown
 * ========================================================= */

    $("#answers").hover(
        function () {
            $(this).addClass("open");
        },
        function () {
            $(this).removeClass("open");
        }
    );

    $("#answers").click(function() {
        if ($(window).width() <= 768) {
            $("#answers").addClass("open");
        }
    });

/* =========================================================
 * Isotope shtuff
 * ========================================================= */

    var $container = $('.isotope'),
        $select = $('#filters ul li');

    $container.isotope({
        itemSelector: '.item',
        filter: '*',
        animationOptions: {
            duration: 0,
            easing: 'ease-in-out',
            queue: false
        },
        masonry: { columnWidth: 0 }
    });
 
    // filter items on list item click
    $select.click(function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                easing: 'ease-out',
                queue: false
            }
         });
        if (selector == "*") {             $("#first").text("all"); }
        if (selector == ".product") {      $("#first").text("product"); }
        if (selector == ".interaction") {  $("#first").text("interaction"); }
        if (selector == ".graphic") {      $("#first").text("graphic"); }
        if (selector == ".brand") {        $("#first").text("brand"); }
        if (selector == ".experience") {   $("#first").text("experience"); }
        if (selector == ".arch") {         $("#first").text("architecture"); }
        if (selector == ".italian") {      $("#first").text("Italian"); }
        if (selector == ".northwest") {    $("#first").text("North-West"); }
        $("#answers").toggleClass("open");
        return false;
    });

/* =========================================================
 * Move Quote on Scroll
 * ========================================================= */

   $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        $('#gridQuote').css({
            top: 150 - (scrollTop / 3)
        });
   });

});