let input=require("readline-sync")
let user = input.questionInt("enter num1....")
var user2 = input.questionInt("enter num2....")

var getlarge = function(num1,num2){
    if (num1 > num2){
        return num1
    }
    else {
        return num2
    }
}
console.log(getlarge(user,user2))