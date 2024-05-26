// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array 
//with the Great added to each magician’s name.

let Magicians:string[]=["Magician A","Magician B","Magician C","Magician D"]
function show_magicians(magicians:string[]){
        for(let i=0;i<Magicians.length;i++){
         console.log(magicians[i])}}



function make_great(magicians:string[]){
    let greatMagicians:string[]= [];
    Magicians.forEach(magician => {
        return greatMagicians.push(`${magician} the great`);
    });
    return greatMagicians;
}


let originalMagicians: string[] = Magicians.slice(); // Create a copy of the original array
let greatMagicians2 = make_great(Magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(originalMagicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians2); // Shows modified names
