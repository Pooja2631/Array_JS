let a=[50,40,23,70,50,12,5,10,57]
let i=0
let mini=a[0]
while (i<a.length){
    if (a[i]<mini){
        mini=a[i]  
    }
    let j=0
    let sec=a[mini]
    while(j<a.length){
        if (mini<a[j] && a[j]<sec ){
            sec=a[j]
        }
        j++
    }
    i++
    console.log(mini)
    console.log(sec)
}

    