function freqCount(str) {
    var counts = {}; //initializing the variable as an object, ability to set properties in this object.
    var letters = str.split("");
    for (var i = 0; i< letters.length; i++) {
        var letter = letters[i];
        if (!counts[letter]) { /*by adding ! you reverse polarity of this statement,
         if there is not a value we're gonna get this... */
            counts[letter] = 0;
        }
        counts[letter]++; // ++ increments something

    }
    return counts;
}

console.log (freqCount("name"))
console.log (freqCount("wood"))
console.log (freqCount("samantha"))