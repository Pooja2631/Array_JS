let str="Poojagupta"
let i=0;
while (i<=str.length){
    if (str.length%2==1){
        a=str.length/2;
        length=1;

    }else{
        a=str.length/2-1;
        length=2;
    }
    i++
}
console.log((str.substring)(a,a+length));