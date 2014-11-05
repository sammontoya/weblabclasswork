$(document).ready(function(){

 var expandBox = $('#biggerbox');

    expandBox.on('mouseenter', function(){
          expandBox
            .stop(true)
          .animate ({
                backgroundColor: 'darkviolet',
                width: 500,
                height: 500,
                fontSize: "3em"
           }, 1500);
    });

    expandBox.on('mouseleave', function (px){
        expandBox
            .stop(true)
        .animate ({
        backgroundColor: 'cyan',
        width: 155,
        height: 155,
        fontSize: "1em"
            }, 1500);
    });

});
//
//
//
//};
//
//
//var current_h = null;
//var current_w = null;
//
//$('.resize').hover(
//    function(){
//        current_h = $(this, '#box')[0].height;
//        current_w = $(this, '#box')[0].width;
//        $(this).stop(true, false).animate({width: (current_w * 1.3), height: (current_h * 1.3)}, 300);
//    },
//    function(){
//        $(this).stop(true, false).animate({width: current_w + 'px', height: current_h + 'px'}, 300);
//    }
//);
// THIS IS AN ALTERNATIVE METHOD or way to write it... this way also resizes font.//

//
//$(".biggerbox").hover(function() {
//    $(this).stop().animate({
//        width: 500,
//        height: 500,
//        fontSize: "3em"
//    });
//}, function() {
//    $(this).stop().animate({
//        width: 155,
//        height: 155,
//        fontSize: "1em",
//    });
//});
//
//});