let input = require("readline-sync")
let user = input.questionInt("enter the number..")
var getPrime = function(num){
    let i=1
    while (i<=num){
        let j=2
        var count=0
        while (j<i){
            if (i%j==0){
                count=count+1
            }
            j++
        }
        if (count==0)
            console.log(i,"prime")
        i++
    }
}
console.log(getPrime(user))