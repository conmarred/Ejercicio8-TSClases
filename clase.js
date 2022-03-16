var Jugador = /** @class */ (function () {
    function Jugador() {
        //A diferencia con otros lenguajes como Java, es obligatorio poner el this para
        //acceder a los atributos
        //Es importante inicializar los atributos en TS para evitar "NaN" o "undefined"
        this._id = 0;
        this._nombre = "Conce";
        this._edad = 0;
        this._pais = "Spain";
    }
    Object.defineProperty(Jugador.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jugador.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jugador.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jugador.prototype, "pais", {
        get: function () {
            return this._pais;
        },
        set: function (value) {
            this._pais = value;
        },
        enumerable: false,
        configurable: true
    });
    return Jugador;
}());
/*//Creamos un objeto y su referencia
let jugador1 : Jugador = new Jugador()

//Los tipos de las referencias siempre serán "object"
console.log("El tipo de la variable es: " + typeof(jugador1))

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
console.log(jugador1)//Persona { _nombre: 'Steve Rogers', _edad: 45 }
*/ 
