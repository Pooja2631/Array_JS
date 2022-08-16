const input = require("readline-sync");
var number = input.questionInt("enter the number....")
let num1 = input.questionInt("enter num1...")
let num2 = input.questionInt("enter num2...")

if ((number%num1==0) && (number%num2==0)){
    console.log("true")
}
else{
    console.log("false")

}