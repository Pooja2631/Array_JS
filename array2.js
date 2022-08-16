let arr = [[1,3],[],[3,4,5],[],[],[2]]
let i=0
while(i < arr.length){
  res = arr[i].length
  if (res === 0){
    arr.splice(arr.indexOf(arr[i]),1)
  }else{
    i++
  }
}
console.log(arr);