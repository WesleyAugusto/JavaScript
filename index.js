let celular = function(){
    this.cor = "preto";

    this.ligar = function(){
        console.log("ligando!")
        return "ok"
    }
}

let objeto = new celular ();  

console.log (objeto.ligar());

//para chamar um metado dentro do objeto  usando ponto nome mais ()
//funçoes e metados sempre terá que retornar algo


