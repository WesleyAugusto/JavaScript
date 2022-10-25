class Controller{
    constructor(){
        this.initialize();
    }

    addEventListenerAll(element, events, func){
        events.split(' ').array.forEach(event => {
            element.addEventListener(event,func);
            
        });
    }
    initialize(){
        let button = document.querySelectorAll(".button > button, .button2 > button");

        button.forEach(btn=>{
            this.addEventListenerAll(btn,"click mouseover",()=>{
                console.log("interagiu")
            })
        })
    }
}