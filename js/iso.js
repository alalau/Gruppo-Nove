$(function() {

/* =========================================================
 * Animated populate
 * ========================================================= */

/*
    var itemList = ['#item-1', '#item-2', '#item-3', '#item-4', '#item-5',
        '#item-6', '#item-7', '#item-8', '#item-9', '#item-10',
        '#item-11', '#item-12', '#item-13', '#item-14', '#item-15', 
        '#item-16', '#item-17', '#item-18', '#item-19', '#item-20'];

    var i = 0;

    function myLoop () {
       setTimeout(function () {
            var item = $(itemList[i]);    
            item.find('.item-inner').animate({ opacity: '1' }, 500, 'easeOutQuint');
            item.find('.interview-title').animate({ opacity: '1' }, 600, 'easeOutQuint');
            i++;
            if (i < itemList.length) {
                myLoop();
            }
       }, 100)
    }
    myLoop();

    $('#pushDown').animate({ paddingTop: '400px' }, 1500, 'easeOutQuint');
*/


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

    $(".item-inner").hover(
        function(){
            $(".interviewPic").css("opacity","0.5");
        }, function() {
            $(".interviewPic").css("opacity","1");
        }
    );

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