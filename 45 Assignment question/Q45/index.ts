// Cars: Write a function that stores information about a car in a Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs, such as a color or
//   an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
type cartype ={
    manufacturer:string
    model:string
    [key:string]:any
}


function carsInformation(manufacturer:string,model:string,...options: [string, any][]):cartype{
let Car:cartype ={
manufacturer,
model}
options.forEach(([key,value])=>{
    Car[key]=value
})
return Car
    
}

console.log( carsInformation("Toyota","corolla",["color","Black"]))
console.log( carsInformation("Honda","civc",["year",2023]))
