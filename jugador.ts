// CLASE HISTORIAL
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

//Creamos un objeto historial
let historial1 : Historial = new Historial()


//Damos valor a los atributos
historial1.id = 3;
historial1.numGoles = 16;
historial1.tarjetaAmarilla = 2;
historial1.tarjetaRoja=1;

//accedemos a los atributos
console.log("id: "+historial1.id)
console.log("numero de goles: "+historial1.numGoles)
console.log("numero de tarjetas amarillas"+historial1.tarjetaAmarilla)
console.log("numero de tarjetas rojas"+historial1.tarjetaRoja)

//Imprimimos el objeto historial1
console.log(historial1)

//CLASE JUGADOR
class Jugador {
    //Atributos
    private _id: number;
    private _nombre: string;
    private _edad: number;
    private _pais: string;
    private _historial: Historial;
    
    
    //Constructor
    constructor(){
        this._id = 0;
        this._nombre = "";
        this._edad = 0;
        this._pais = "";
        this._historial;
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
    public get historial(): Historial {
        return this._historial;
    }
    public set historial(value: Historial) {
        this._historial = value;
    }

}

//Creamos un objeto jugador
let jugador1 : Jugador = new Jugador()


//Damos valor a los atributos
jugador1.id = 3;
jugador1.nombre = "Messi"
jugador1.edad = 30;
jugador1.pais = "Argentina"
jugador1.historial = historial1

//acceder a los atributos
console.log("id: "+jugador1.id)
console.log("nombre: "+jugador1.nombre)
console.log("edad: "+jugador1.edad)
console.log("pais: "+jugador1.pais)
console.log("historial: "+jugador1.historial)


//Imprimimos el jugador1
console.log(jugador1)

//creo otro jugador y su historial
let jugador2 : Jugador = new Jugador()

jugador2.id = 6;
jugador2.nombre = "Andrea"
jugador2.edad = 26;
jugador2.pais = "Ecuador"

let historial2 : Historial = new Historial()


historial2.id = 4;
historial2.numGoles = 9;
historial2.tarjetaAmarilla = 1;
historial2.tarjetaRoja=0;

jugador2.historial = historial2

//CLASE EQUIPO
class Equipo{
    //Atributos
    private _id: number;
    private _nombre: string;
    private _fecha: string;
    private _jugador: Jugador[];
    
    
    
    //Constructor
    constructor(){
        this._id=0;
        this._nombre="";
        this._fecha="";
        this._jugador=[];
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
    public get fecha(): string {
        return this._fecha;
    }
    public set fecha(value: string) {
        this._fecha = value;
    }
    public get jugador(): Jugador[] {
        return this._jugador;
    }
    public set jugador(value: Jugador[]) {
        this._jugador = value;
    }

}

//Creamos un objeto equipo
let equipo1 : Equipo = new Equipo()


//Damos valor a los atributos
equipo1.id = 3;
equipo1.nombre = "Betis"
equipo1.fecha = "11/02/2022";
equipo1.jugador.push(jugador1)
equipo1.jugador.push(jugador2)


console.log("id: "+equipo1.id)
console.log("nombre: "+equipo1.nombre)
console.log("fecha: "+equipo1.fecha)
console.log("jugadores"+equipo1.jugador)


//Imprimimos la el objeto equipo1
console.log(equipo1)

