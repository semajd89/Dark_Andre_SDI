/** Andre` Dark
 *SDI section 02
 *Expressions Assignment
 * 06/11/2015
 */

//This is a test to make sure my script.js file is connected to the HTML file successfully.
// alert("This is a test!");

// The house bills add together and divided between two people.
var lights = 65;
var water = 45;
var rent = 850;
var internet = 35;

var myBills = (lights + water + rent + internet)/2;
console.log(myBills);


//Create a calculator for the house bills.

//Ask the user for there name.

var name = prompt("Let's figure out your budget.\nPlease type in your name!");

//Greeting the user by using the variable.
alert("Hello " +name+"!");

//Ask the user how much do they pay for bills.

var bills = prompt("How much do you pay a month for bills?");

//log the user's answer in console.log.
console.log(bills);

//confirm that the user pay x amount for bills.
alert(name+ ", you are currently paying $" +bills+ " dollars a month!");
console.log(name+ ", you are currently paying $" +bills+ " dollars a month!");

//Figure out how much the user is paying by week and year.
var billsByWeek = bills/4;
var billsByYear =bills*12;

alert("That equals to $" +billsByWeek+ " a week, and $" +billsByYear+ " a year!");
console.log ("That equals to $" +billsByWeek+ " a week, and $" +billsByYear+ " a year!");

//prompt the user how much they get paid a month.
var income = prompt("How much do you get paid monthly?");
console.log ("How much do you get paid monthly?");
var budget = income-bills;

//divide the user's bills from their income.
alert("After you pay your bills you are left with $" +budget+ ".");
console.log ("After you pay your bills you are left with $" +budget+ ".");

/* I typed $500 for variable bills and came up with $125 for var billsByWeek and $6000 for billsByYear
 For income I typed $800 and came up with $300 for the difference.

 */