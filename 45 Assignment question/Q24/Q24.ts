//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//quality and inequality with strings
let num = "75"
    console.log(num == "75")
     console.log(num !== "75")

// lower case function
 let myName="Taqdees"  
    console.log(myName.toLowerCase() == "taqdees")
    console.log(myName.toLowerCase() == "Taqdees")

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 8;
let num2 = 6;
console.log(num1 == num2);
console.log(num1 !== num2);
//<>
console.log(num1>num2);
console.log(num1 < num2);
//<=,>=
console.log(num1 >= num2);
console.log(num1 <= num2);
//and" and "or" operators
console.log(num1 > num2 && num2 < num1);
console.log(num1 < num2 || num2 > num1);


//item is in a array
let array=[1,2,3,4,5,6]
console.log(array.indexOf(4) !== -1)
// item is not in a array
console.log(array.indexOf(5)== -1)









