class Jugador {
    //Atributos
    private _id: number;
    private _nombre: string;
    private _edad: number;
    private _pais: string;
    
    //Constructor
    constructor(){
        this._id = 0;
        this._nombre = "";
        this._edad = 0;
        this._pais = "";
    }

    //Getters y Setters
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    public get pais(): string {
        return this._pais;
    }
    public set pais(value: string) {
        this._pais = value;
    }

}

//Creamos un objeto y su referencia
let jugador1 : Jugador = new Jugador()


//Podemos cambiar el estado de un objeto mediante su set
jugador1.id = 3;
jugador1.nombre = "Messi"
jugador1.edad = 30;
jugador1.pais = "Argentina"

//o acceder a ellos
console.log(jugador1.nombre)
console.log(jugador1.edad)
console.log(jugador1.nombre)
console.log(jugador1.edad)


//Imprimimos la persona entera, por defecto lo saca con formato muy parecido a JSON
console.log(jugador1)
