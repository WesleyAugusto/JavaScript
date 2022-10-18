class Controller {
    constructor(){
        this._timeElement = document.querySelector("#date");
        this.initialize();
    }
initialize(){
    
    setInterval(() => {
        this._timeElement.innerHTML = this.currentDate.toLocaleTimeString("pt-BR");
    },1000)
       

}

get textElement(){
    return this._timeElement;
}
set textElement(value){

    this._timeElement.innerHTML = value;
}

get currentDate(){

    return new Date();

}


}