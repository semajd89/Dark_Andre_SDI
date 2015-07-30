/**
 * Andre Dark
 * 07/30/2015
 * Functions Assignment
 * section 01
 */

//alert("This is a test");

//4 22 27 28 52 35

prompt("Hey would you like the numbers for Florida lottery?"); //prompt the user the florida pick numbers


var flaLottery = lotteryPick(4,22,27,28,52,35); //function call with the arguments as my pick numbers

function lotteryPick(pick1, pick2, pick3, pick4, pick5, pick6){ //function setup

alert("The first lottery pick number is " + pick1 + ""); //alerts the user the florida pick numbers one by one
alert("The second lottery pick number is " + pick2 + "");
    alert("The third lottery pick number is " + pick3 + "");
    alert("The fourth lottery pick number is " + pick4 + "");
    alert("The fifth lottery pick number is " + pick5 + "");
    alert("The sixth lottery pick number is " +pick6 + "");

    var lotteryNum = [pick1, pick2, pick3, pick4, pick5, pick6]; // return the value for console.log to print out
    return lotteryNum;



}
alert("The Florida lottery numbers is " +flaLottery+".",  "If you picked these numbers then you are the lucky winner. Congratulations!!!" +
" "); //alerts the user the final florida lottery numbers

console.log("The Florida lottery numbers is " +flaLottery+ ""); //print out to the console of the final value


/*lotteryPick2(55,86)

function lotteryPick2 (pick1, pick2){
    alert("The first lottery pick number is " +pick1+ "")
}

This was a test to prove the numbers I plug in worked with the function
