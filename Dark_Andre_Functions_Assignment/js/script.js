/**
 * Andre Dark
 * 07/30/2015
 * Functions Assignment
 * section 01
 */

//alert("This is a test");

//4 22 27 28 52 35

prompt("Hey would you like the numbers for Florida lottery?");


var flaLottery = lotteryPick(4,22,27,28,52,35);

function lotteryPick(pick1, pick2, pick3, pick4, pick5, pick6){

alert("The first lottery pick number is " + pick1 + "");
alert("The second lottery pick number is " + pick2 + "");
    alert("The third lottery pick number is " + pick3 + "");
    alert("The fourth lottery pick number is " + pick4 + "");
    alert("The fifth lottery pick number is " + pick5 + "");
    alert("The sixth lottery pick number is " +pick6 + "");

    var lotteryNum = [pick1, pick2, pick3, pick4, pick5, pick6];
    return lotteryNum;



}


console.log("The Florida lottery numbers is " +flaLottery+".",  "If you picked these numbers then you are the lucky winner. Congratulations!!!" +
" ");


/*lotteryPick2(55,86)

function lotteryPick2 (pick1, pick2){
    alert("The first lottery pick number is " +pick1+ "")
}

This was a test to 
