class CalculatorController{
    constructor(){
        this._data = "0";
        //o _  deixa um atribulto privado nao é a maneira correta mais a maneira que o javascript trabalha.
    }

    get getdata(){
        return this._data;
    }

    set setData(value){
 
        this._data = value;

    }
}