class Historial{
    //Atributos
    private _id: number;
    private _numGoles: number;
    private _tarjetaAmarilla: number;
    private _tarjetaRoja: number;
    
    
    //Constructor
    constructor(){
        this._id=0;
        this._numGoles=0;
        this._tarjetaAmarilla=0;
        this._tarjetaRoja=0;
    }

    //Getters y Setters
     public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get numGoles(): number {
        return this._numGoles;
    }
    public set numGoles(value: number) {
        this._numGoles = value;
    } 
    public get tarjetaAmarilla(): number {
        return this._tarjetaAmarilla;
    }
    public set tarjetaAmarilla(value: number) {
        this._tarjetaAmarilla = value;
    }
    public get tarjetaRoja(): number {
        return this._tarjetaRoja;
    }
    public set tarjetaRoja(value: number) {
        this._tarjetaRoja = value;
    }
}

//Creamos un objeto y su referencia
let historial1 : Historial = new Historial()


//Podemos cambiar el estado de un objeto mediante su set
historial1.id = 3;
historial1.numGoles = 16;
historial1.tarjetaAmarilla = 2;
historial1.tarjetaRoja=1;

//o acceder a ellos
console.log(historial1.id)
console.log(historial1.numGoles)
console.log(historial1.tarjetaAmarilla)
console.log(historial1.tarjetaRoja)

//Imprimimos la persona entera, por defecto lo saca con formato muy parecido a JSON
console.log(historial1)