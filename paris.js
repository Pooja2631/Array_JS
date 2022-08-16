var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
let a=[]
let i=0
while (i<list1.length){
    if (!list2.includes(i)){
        a.push(i)
    }
    i=i+1
}
console.log(a)
