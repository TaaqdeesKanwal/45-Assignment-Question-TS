// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
// let Magicians:string[]=["Magician A","Magician B","Magician C","Magician D"]
// function show_magicians(magicians:string[]){
//    Magicians.forEach((magician)=>{console.log( magician)}) ;
// }
// show_magicians(Magicians)
// let Magicians:string[]=["Magician A","Magician B","Magician C","Magician D"]
// function show_magicians(magicians:string[]){
//    for(let i=0;i<Magicians.length;i++){
//     console.log(Magicians[i])
//    }}
//    show_magicians(Magicians)
var Magicians = ["Magician A", "Magician B", "Magician C", "Magician D"];
function show_magicians(magicians) {
    Magicians.map(function (magician) { console.log(magician); });
}
show_magicians(Magicians);
