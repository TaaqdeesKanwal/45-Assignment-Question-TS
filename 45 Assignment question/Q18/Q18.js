// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//Store the locations in a array. Make sure the array is not in alphabetical order
var country = ["UAE", "Singapore", "Germany", "Turkey", "USA"];
//Print your array in its original order.
console.log("original array", " ", country);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("alaphabetical order", country.slice().sort());
//Show that your array is still in its original order by printing it.
console.log("original array", country);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical array", country.slice().sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("original Array", country);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("reverse order", country.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("original order", country.reverse());
console.log(country);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("alphabetical order", country.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reverse alphabetical order", country.sort().reverse());
