let a=['red', 'white', 'a', 'b', 'black', 'f']
let i=0
let String= ""
let b=[]
while (i<a.length){
    String=String+(a[[i]])
    // String.split(a[[i]])
    b.push(String)
    i++
}
console.log(b)