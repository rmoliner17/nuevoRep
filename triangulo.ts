import { Punto } from "./pag4"

class Triangulo{
     
    private punto1:Punto
    private punto2:Punto
    private punto3:Punto

    constructor(punto1:Punto, punto2:Punto, punto3:Punto){

        this.punto1 = punto1
        this.punto2 = punto2
        this.punto3 = punto3

    }

   /* public calcularDistancia(otroPunto:Punto):number{
        let distancia = 0;
        distancia = Math.sqrt(Math.pow(this.x-this.y,2)-Math.pow(otroPunto.x -otroPunto.y,2))
        return distancia
    }*/

    public calcularLogitudLados():number[]{
        let distancias:number[]=[];
        distancias.push(punto3.calcularDistancia(punto2),
            punto2.calcularDistancia(punto1),
            punto1.calcularDistancia(punto3))
        return distancias 
    }

}

let punto3:Punto = new Punto(1,14)
let punto1:Punto = new Punto(1,10)
let punto2:Punto = new Punto(32,9)
let equilatero:Triangulo = new Triangulo (punto1, punto2, punto3)


console.log(equilatero.calcularLogitudLados())
console.log(punto2.calcularDistancia(punto1))