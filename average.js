var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
let i=0
let sum= 0
let sum1=0
var count=0
var count1=0
let average=0
let average1=0
while (i<elements.length){
    if (elements[i]%2==0){
        count=count+1
        sum=sum+elements[i]
        average=sum/count
    }
    else{
        count1=count1+1
        sum1=sum1+elements[i]
        average1=sum1/count1
    }
    i++
}
console.log(count)
console.log(count1)
console.log(sum)
console.log(sum1)
console.log(average)
console.log(average1)