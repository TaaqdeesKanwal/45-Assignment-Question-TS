// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called 
//make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
var Magicians = ["Magician A", "Magician B", "Magician C", "Magician D"];
function show_magicians(magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
    ;
}
function make_great(magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i] + " " + "The great");
    }
    ;
}
show_magicians(Magicians);
make_great(Magicians);
