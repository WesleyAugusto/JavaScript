function calculator(a,b,operator){//function 1 você pode chamar a função em varios lugares
return eval('&{a} &{b} &{operator}');
}
let result = calculator(2,5,"*");

console.log(result);

//funçoes anonimas

( function (a,b,operator){//function 2
    return eval('&{a} &{b} &{operator}');
    } )(2,5,"*")
   
//arrow fuction
let calculator = (a,b,operator) => {//function 3
    return eval('&{a} &{b} &{operator}');
    }
    let resulte = calculator(2,5,"*");
    
    console.log(result);
