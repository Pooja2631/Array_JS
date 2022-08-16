let array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
var emp_arr=[]
var positiveNegative = function(){
    let i=0
    let count=0
    let sum=0
    while (i<array.length){
        if (array[i]>0){
            count=count+1
        }
        else if (array[i]<0){
            sum=sum+array[i]
        }
        i++
    }
    emp_arr.push(count,sum)
    return emp_arr
}
console.log(positiveNegative())