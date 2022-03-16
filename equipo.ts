class Equipo{
    //Atributos
    private _id: number;
    private _nombre: string;
    private _fecha: string;
    
    
    //Constructor
    constructor(){
        this._id=0;
        this._nombre="";
        this._fecha="";
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

}

//Creamos un objeto y su referencia
let equipo1 : Equipo = new Equipo()


//Podemos cambiar el estado de un objeto mediante su set
equipo1.id = 3;
equipo1.nombre = "Betis"
equipo1.fecha = "11/02/2022";

//o acceder a ellos
console.log(equipo1.id)
console.log(equipo1.nombre)
console.log(equipo1.fecha)


//Imprimimos la persona entera, por defecto lo saca con formato muy parecido a JSON
console.log(equipo1)
