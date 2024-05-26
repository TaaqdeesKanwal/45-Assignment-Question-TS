// avorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favFruit:string[]=["Grapes","Peach","Mango"]
if(favFruit.indexOf("Grapes") !== -1 ){
    console.log("I really like Grapes")
}
if(favFruit.indexOf("Orange") == -1){
    console.log("Oranges is not in array list")
}
if(favFruit.indexOf("Mango") !== -1){
    console.log("I really like mango")
}
if(favFruit.indexOf("Peach")){
    console.log("I like peach")
}
if(favFruit.indexOf("banana") == -1){
    console.log("Banana is not in list")
}