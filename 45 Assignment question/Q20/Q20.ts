//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries=["Pakistan","Turkey","Saudia Arabia","UAE","Singapore"]
console.log(`list of cities:`)
countries.forEach((item,index)=>(
    console.log(`${index+1}=${item}`)
))