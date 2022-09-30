//arrays

var montadoras = ["vw"," fiat"," ford"," honda"," new Date()","true"," function(){}]; 

console.log(montadoras.length);
console.log(montadoras[3]);
console.log(montadoras[4].getDate());
console.log(montadoras[4].toLocalDateString("pt-Br"));
console.log(montadoras[6](1,1,1,));
//voce pode pegar atribultos de uma função ou de  um obejeto 

//maneira de  percorrer os arrays forEach

montadoras.forEach(function(value, index){
    console.log(value, index)
})