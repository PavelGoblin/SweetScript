let gameNum=25;
let userName =prompt("Guess the game number :");
while(userName != gameNum){
  userName=prompt("You entered wrong number.Guess again:");
}
console.log("Congratulations,you entered the wright number");