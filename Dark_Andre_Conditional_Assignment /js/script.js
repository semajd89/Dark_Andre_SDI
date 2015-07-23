/**
 * Andre Dark
 * Conditional Assignment
 * 7/23/15
 */


//alert("This is a test!");

//Asking the user how many cigarettes they smoke a week
var userInput = prompt("How many cigarettes do you smoke a week?");
var cigADay = userInput/7; //the total of how many cigarettes they smoke a day, there is 7 days in a week
var noData = ""; // This is the variable for when the user does not enter anything
var packsOfCig = userInput/20; //How many packs of cigarettes the user smoke a week

alert("You smoke " + cigADay + " cigarettes a day"); // tells the user how many cigarettes they smoke a day

if (userInput===noData){ // if statement for when no data is entered

    //message for the user to tell them to enter something
    alert("Please enter a number");
}else if (packsOfCig) { //the condition for how many packs of cigarettes the user smoke a week
    alert(" That is " + packsOfCig + " packs of cigarettes a week "); //tells the user how many packs the smoke a week
}
else {
    alert("Make sure you enter in a number"); //tells the user to enter a number in instead of a character
}
