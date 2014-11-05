//function checkRow(row){
//    var matches = 0;
//    var val = row [0];
//
//    row.forEach (function(cell){
//        if (cell = = = val) matches ++;}
//    );
//
//    return (matches === 3 && val);
//
//}



$ (document);
var board = []; //three rows of three
var players = ['x', 'o'];
var current =0; //treating as an index, initializing it to 0 and first player is always x.
var msg = $('#msg');//TODO this will be where we insert game message
var whos_turn = $('.whos_turn'); //TODO displays which players turn it is
var total_moves = 0;
var game_over = false;


$('tr').each(function(idx, row){
    board.push ( $ (row).find('td'). toArray ());

});
 reset ();

 $('td').on('click', click);
 $('#reset').on('click', reset);

function click(){
    var el = $(this);
    msg.text ('');
//    console.log (this);
    if (game_over) return;
    if (el.text()!== '') return msg.text ('already set');
    total_moves++;

    // This always needs to be 1 or 0 to match the array index call
    // This is working fine
    el.text(players[current]);

    checkForWin();

    if (current < players.length-1){
        current++;
    } else{
        current=0;
    }

    if (msg.hasClass('winner')) {
        whos_turn.text('');
    }
    else {
        whos_turn.text('player ' + (current + 1));
    }

    if(total_moves == 9 && game_over == false){
        msg.text('game over. no moves left.');
    }
}


function checkForWin (){

    //checks horizontal rows for a win
    board.forEach(checkAndMark); //check each row than if it does return true from CheckRow we will pass it to markRow, as of right this second we haven't written markRow

    var diagonal1 = [board [0][0], board [1][1], board [2][2]];
    var diagonal2 = [board [0][2], board [1][1], board [2][0]];
//    console.log("diagonal one", diagonal1);
//    console.log("diagonal two", diagonal2);

    checkAndMark (diagonal1);
    checkAndMark (diagonal2);
//    console.log("board", board);

    //check vertical rows for a win//
    transpose(board).forEach(checkAndMark);


    function checkAndMark(row) {
        if (checkRow(row)) {
            markRow(row);
            var winner = current + 1;
            whos_turn.text("");
            msg.text('player' + winner + 'wins!').addClass('winner');
        }
    }
}

function markRow (row){
    row.forEach(function(cell){
        //console.log(cell);
        $(cell).addClass('red');
  });
    //console.log (msg);
    game_over = true;


}

function checkRow(row){
    var cell1 = $(row[0]).text();
    if ( cell1 &&
        cell1 === $(row[1]).text() &&
        cell1 === $(row[2]).text()) {
        return true;
    }
    else {
        return false;
    }
}

function reset (){
    $('td').removeClass('red').text('');
    current = 0;
    msg.text('');
    whos_turn.text('player' + (current +1));
    game_over = false;
    total_moves = 0;
}

function transpose(rows){
    var board = [];
//    console.log("rows coming in", rows);
    for (var i = 0; i < rows[0].length; i++){
        var row = [rows[0][i]];
//        console.log("row in first for loop", row);
        for( var j = 1; j< rows.length; j++) {
            row.push(rows[j][i]);
//            console.log("rows in second for loop", rows[j][i])
        }
    board.push(row);
//        console.log("transpose row",row);
    }
//    console.log("board", board);
    return board;
}