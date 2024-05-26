// Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. •
// Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var friends = ["Abdullah", "Taskeen", "Saifullah", "Rubina"];
var notAttend = "Taskeen"; //taskeen is not coming
var newGuest = "Samha"; //samha is coming in place of taskeen
friends[friends.indexOf(notAttend)] = newGuest;
//This unshift method adds guest in beginning of array
friends.unshift("Sakina");
//This splice method add guest in middle of array
var index = 3;
var middleFriend = "Sehar";
friends.splice(index, 0, middleFriend);
//This push method add guest in the end
friends.push("Abdul Moiz");
//print invitation
friends.map(function (item) { return (console.log("Dear ".concat(item, " I found an other big dining table for Saturday Dinner"))); });
