// CLASE HISTORIAL
class Historial {
    //Constructor
    constructor() {
        this._id = 0;
        this._numGoles = 0;
        this._tarjetaAmarilla = 0;
        this._tarjetaRoja = 0;
    }
    //Getters y Setters
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get numGoles() {
        return this._numGoles;
    }
    set numGoles(value) {
        this._numGoles = value;
    }
    get tarjetaAmarilla() {
        return this._tarjetaAmarilla;
    }
    set tarjetaAmarilla(value) {
        this._tarjetaAmarilla = value;
    }
    get tarjetaRoja() {
        return this._tarjetaRoja;
    }
    set tarjetaRoja(value) {
        this._tarjetaRoja = value;
    }
}
//Creamos un objeto historial
let historial1 = new Historial();
//Damos valor a los atributos
historial1.id = 3;
historial1.numGoles = 16;
historial1.tarjetaAmarilla = 2;
historial1.tarjetaRoja = 1;
//accedemos a los atributos
console.log("id: " + historial1.id);
console.log("numero de goles: " + historial1.numGoles);
console.log("numero de tarjetas amarillas" + historial1.tarjetaAmarilla);
console.log("numero de tarjetas rojas" + historial1.tarjetaRoja);
//Imprimimos el objeto historial1
console.log(historial1);
//CLASE JUGADOR
class Jugador {
    //Constructor
    constructor() {
        this._id = 0;
        this._nombre = "";
        this._edad = 0;
        this._pais = "";
        this._historial;
    }
    //Getters y Setters
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get pais() {
        return this._pais;
    }
    set pais(value) {
        this._pais = value;
    }
    get historial() {
        return this._historial;
    }
    set historial(value) {
        this._historial = value;
    }
}
//Creamos un objeto jugador
let jugador1 = new Jugador();
//Damos valor a los atributos
jugador1.id = 3;
jugador1.nombre = "Messi";
jugador1.edad = 30;
jugador1.pais = "Argentina";
jugador1.historial = historial1;
//acceder a los atributos
console.log("id: " + jugador1.id);
console.log("nombre: " + jugador1.nombre);
console.log("edad: " + jugador1.edad);
console.log("pais: " + jugador1.pais);
console.log("historial: " + jugador1.historial);
//Imprimimos el jugador1
console.log(jugador1);
//creo otro jugador y su historial
let jugador2 = new Jugador();
jugador2.id = 6;
jugador2.nombre = "Andrea";
jugador2.edad = 26;
jugador2.pais = "Ecuador";
let historial2 = new Historial();
historial2.id = 4;
historial2.numGoles = 9;
historial2.tarjetaAmarilla = 1;
historial2.tarjetaRoja = 0;
jugador2.historial = historial2;
//CLASE EQUIPO
class Equipo {
    //Constructor
    constructor() {
        this._id = 0;
        this._nombre = "";
        this._fecha = "";
        this._jugador = [];
    }
    //Getters y Setters
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get fecha() {
        return this._fecha;
    }
    set fecha(value) {
        this._fecha = value;
    }
    get jugador() {
        return this._jugador;
    }
    set jugador(value) {
        this._jugador = value;
    }
}
//Creamos un objeto equipo
let equipo1 = new Equipo();
//Damos valor a los atributos
equipo1.id = 3;
equipo1.nombre = "Betis";
equipo1.fecha = "11/02/2022";
equipo1.jugador.push(jugador1);
equipo1.jugador.push(jugador2);
console.log("id: " + equipo1.id);
console.log("nombre: " + equipo1.nombre);
console.log("fecha: " + equipo1.fecha);
console.log("jugadores" + equipo1.jugador);
//Imprimimos la el objeto equipo1
console.log(equipo1);
