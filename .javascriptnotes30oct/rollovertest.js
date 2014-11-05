/**
 * Created by johnspagnola on 10/30/14.
 */
$(document).ready(function(){

//
//    var expandList = $('li.expandable');
//
//    expandList.on('mouseenter', function(){
//        expandList
//            .stop(true)
//            .animate ({
//            width: 300,
//            height: 300,
//        }, 1500);
//    });
//
//    expandList.on('mouseleave', function (){
//        expandList
//            .stop(true)
//            .animate ({
//            width: 85,
//            height: 85,
//        }, 1500);
//    });
//
//});


    var punkin = $('li');
        (punkin).mouseenter (function() {
            $(this).addClass('fatter');
            $(this).prevAll(".fat").addClass("fatter");
        });

        (punkin).mouseleave(function() {
            $(this).removeClass('fatter');
            $(this).prevAll(".fat").removeClass("fatter");
        });

        (punkin).click(function(){
            $('li').removeClass("current");
            $(this).addClass ("current");
            $(this).prevAll(".fat").addClass("current");
    });
});