//
//    var string = "Test Me";
//
//    console.log (string);

    //linked string that counts the holes in the characters
function countHoles (str){
    var total =0;
    var letters = str.split("");
    for (var i=0; i < letters.length;i++){
        var letter = letters [i];
        if (lookup [letter])total + = lookup [letter] ;
    }
    return total;


        var lookup = {
            4:1, 6:1, 8:2, 9:1, 0:1,
            a:1, A:1, b : 1, B : 2, D : 1, d : 1,
            e : 1, g : 1, o :1, O :1, p :1,
            P :1, q :1, Q :1, R :1,
        }

    }
    var result = countHoles"word"
    console.log(result);




