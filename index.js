let now = Date.now (); //timestamp

console.log ('%c ${now}','color: white; background-color: blue');




let now = new Date (); 

console.log('%c ${now.getDate()}','color: white; background-color: blue'); //dia
console.log('%c ${now.getMonth()}','color: white; background-color: blue');//mês
console.log('%c ${now.getFullYear()}','color: white; background-color: blue');//ano
console.log('%c ${now.toLocaleDateString(pt-BR)}','color: white; background-color: blue');//tras o horario de acordo com pais de  origem da  pessoa


