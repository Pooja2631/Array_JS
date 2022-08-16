let arr=[[4,3,2],[3,1,7],[4,7,12]]
let i=0
let sum=0
while (i<arr.length){
    var j=0
    while (j<arr[i].length){
        if (i!==j){
           sum=sum+arr[i][j] 
        }
        j++
    }i++
}  
console.log(sum)
