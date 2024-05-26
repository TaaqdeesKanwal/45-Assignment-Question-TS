//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
// //  using a different number of arguments each time.
// function sandwich(...sandwichitem:string[]){
//     console.log( `Making a sandwitch with :`)
//     console.log(`${sandwichitem}`)
// }
// sandwich("cheese","cucumber","tomato")
// sandwich("chicken","onion","Raita")
// sandwich("ketchup","chilli mayo")
function makeSandwich(...ingredients) {
    console.log("Making a sandwich with the following ingredients:");
    for (let i = 0; i < ingredients.length; i++) {
        console.log("- " + ingredients[i]);
    }
    console.log("Enjoy your sandwich!\n");
}
// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese", "Avocado");
makeSandwich("Peanut Butter", "Jelly");
export {};
