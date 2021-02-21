export class Punto{

        private x:number
        private y:number
        
    
    constructor(x:number, y:number){
        this.x = x
        this.y = y
    }

    public toString(){
        return "(" + this.x +","+ this.y + ")"
    }

    public getX():number
    {
       return this.x
    }
    public getY():number
    {
        return this.y
    }
    public setX(newX:number)
    {
        this.x=newX
    }
    public setY(newY:number)
    {
        this.y=newY
    }

    public distanciaAlOrigen():number{
        let raizCuadrada = 0;
        raizCuadrada = Math.sqrt(Math.pow(this.x-this.y,2))
        return raizCuadrada 
    }

    public calcularDistancia(otroPunto:Punto):number{
        let distancia = 0;
        distancia = Math.sqrt(Math.pow(this.x-this.y,2)+ Math.pow(otroPunto.getX() - otroPunto.getY(),2))
        return distancia
    }

    public calcularCuadrante():number{
        if(this.x == 0 || this.y == 0){
            return 0
        }else if(this.x > 0 || this.y > 0){
            return 1
        }else if(this.x < 0 || this.y < 0){
            return 2
        }else if(this.x > 0 || this.y > 0){
            return 3
        }else{
            return 4
        }
    }

    public calcularMasCercano(puntos : Punto[]):Punto{
        let total = this.calcularDistancia(puntos[0])
        let final:Punto
        for(let i = 0; i<puntos.length; i++){
            
            if(this.calcularDistancia(puntos[i]) < total){
                total = this.calcularDistancia(puntos[i])
                final = puntos[i]
            }
             
        }

        return final

    }

}

let punto3:Punto = new Punto(12,14)
let punto1:Punto= new Punto(1,2)
let punto2:Punto=new Punto(3,4)
let punto5:Punto=new Punto(5,89)
let punto4:Punto=new Punto(17,4)
let arr = []
//console.log(coordenada)
console.log(punto3.toString())
console.log(punto3.distanciaAlOrigen())
punto3.getX()
//let otroPunto:Punto = new Punto(8,2)
punto1.calcularMasCercano([punto2, punto3, punto4, punto5])