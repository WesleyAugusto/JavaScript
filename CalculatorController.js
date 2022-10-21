class Controller {
    constructor(){
        this._textElement = document.querySelector("#text");
        this._timeElement = document.querySelector("#date");
        this.initialize();

        this.initializeButton();
        
    }
initialize(){

       this._textElement.innerHTML = "Titulo da pagina"
    setInterval(() => {
        this._timeElement.innerHTML = this.currentDate.toLocaleTimeString("pt-BR");
    },1000)
}
initializeButton(){
    document.querySelector(".button > .btn")
    
}

get textElement(){
    return this._textElement;
    
}
set textElement(value){

    this._textElement.innerHTML = value;
    this._timeElement.innerHTML = value;
}

get currentDate(){

    return new Date();

}
//querySelectorAll pega varios elementos node list 
//querySelector pega primeiro elementos node list

}