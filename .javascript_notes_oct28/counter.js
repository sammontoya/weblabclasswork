
$(document).ready(function(){
    var maxChar = 140;
    var inputBox = $('#textbox');
    var count = $('#count');
    inputBox.on('keyup', checkAndUpdateCount);
//    moved checkandupdate count to it's own function. you don't need event in the parentheses below. but that tells us that it is.

    checkAndUpdateCount();

    function checkAndUpdateCount() {
        var currentText = inputBox.val();
//        .val is a jquery method and will return current value of input field.
        var remainingChar = maxChar - currentText.length;

        if (remainingChar > 20) {
            count.removeClass('warn');
        } else {
            count.addClass('warn');
        }

//        display(maxChar - currentText.length) in span.

        if (remainingChar >= 0){
            count.text(remainingChar);
        } else {
        count.text(0);
        var truncate = currentText.substring(0, maxChar-1);
        inputBox.val(truncate);
        }
    }

});