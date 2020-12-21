var numOfWon=0;
var numOfLost=0;
for(x=0;x<=5;x++){
    var guessNum=parseInt(prompt("Enter num from 1to 5="));

var randomNum=Math.floor(Math.random()*5+1);
if(guessNum==randomNum){
    document.write("you have won"+"<br>");
    numOfWon++;
}else{
document.write("you have lost. random num was="+randomNum+"<br>");
numOfLost++
}
}
document.write("num of won is="+numOfWon+"<br>");
document.write("num of lost is="+numOfLost+"<br>");