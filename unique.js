var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let i=0
let count=0
while (i<arr1.length){
    let j=0
    while (j<arr1.length){
        if (arr1[i]==arr1[j]){
            count=count+1
        }
        j++
    }
    i++
}
console.log(count)