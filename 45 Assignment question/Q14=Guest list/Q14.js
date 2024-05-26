// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
//Answer
var guestList = ["Abdiullah", "Taskeen", "Saifullah", "Rubina"];
// for (let i=0; i <guestList.length ; i++)
// console.log(guestList[i] + " " +"you are invited for Dinner for saturday")
guestList.map(function (item) { return (console.log("Dear".concat(item, "you are invited for Dinner for saturday"))); });
