//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries = ["Pakistan", "Turkey", "Saudia Arabia", "UAE", "Singapore"];
console.log("list of cities:");
countries.forEach(function (item, index) { return (console.log("".concat(index + 1, "=").concat(item))); });
