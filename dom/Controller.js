class Controller {
    constructor(){
        this._textElement = document.querySelector("#text");
        this.initialize();
    }
initialize(){
    
       this._textElement.innerHTML = "Titulo da pagina"

}

get textElement(){
    return this._textElement;
}
set textElement(value){

    this._textElement.innerHTML = value;
}

}