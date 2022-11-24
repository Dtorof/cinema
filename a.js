let capacidad = 20

var data = [];
let numb= 0;
let position =65

// ...
var tempData = [];
for ( var index=0; index<=capacidad; index++ ) {
   
    if(numb %10==0 && numb>10){
        position+=1
         numb= 0;
       
    }
    let char = String.fromCharCode(position);
  
    data[index] = { "ID": char+(numb+1), "Status": "Available" };
     tempData.push( data );
    numb+= 1;
    
}
[data] = tempData;
const [...res] = data
res.pop(res.length - 1)
console.log(res)


// const res = data.pop(data.length -1)
// console.log(res);