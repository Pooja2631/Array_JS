var number = [19, 17, 12, 18, 10, 17, 14, 32, 19, 18, 12, 13, 11]
a=[]
b=[]
for(var i of number){
  if(!a.includes(i)){
      a.push(i)
  }
}
 
for(var j of a){
  count=0
  for(var k of number_list){
      if (j === k){
          count+=1
      }
  }
 if(count >1){
   b.push(j);
};
}
 
console.log(b);