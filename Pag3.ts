import { Mobile } from "./Pag2Clase"

export class MobileLibrary {

    ///declaracion de propiedades privadas
    private name: string
    private location: string
    private mobiles: Mobile[]
    private totalPrice: number


    ///implementacion del metodo del constructor

    constructor(name:string, location:string, mobiles:Mobile[]){

        this.name = name
        this.location = location
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()

    }

        public getName():string
            {
               return this.name
            }
        public getLocation():string
            {
                return this.name
            }
        public getMobiles():string
           {
               return this.name
           }    
        public setName(newName:string)
           {
               this.name = newName
           }
        public setLocation(newlocation:string)
           {
               this.location=newlocation
           }
        public setMobiles(newmobiles:Mobile[])
           {
               this.mobiles=newmobiles
           }

        private totalPriceCalculation(){

            var precioTotal = 0
            for(let i = 0; i< this.mobiles.length;i++){
                precioTotal += this.mobiles[i].getPrice() 
            } 
            return precioTotal   
        }
    
    public printLibrary()
        {   console.log("This are all my mobiles :")
            for(let i=0; i<this.mobiles.length; i++){
                console.log(this.mobiles[i].printCarac())
            }
            console.log ("Price overall : " + this.totalPrice)
        }
}


let movil1:Mobile = new Mobile("viejo", 3210," Nokia", 10," gris", "no", 1, 39)
let movil2:Mobile = new Mobile("iphone", 3, "Apple", 20, "blanco", "no", 2, 100) 
let movil3:Mobile = new Mobile("galaxy", 10, "samsung", 30, "negro", "si", 3, 200)
let movil4:Mobile = new Mobile("redmi", 8, "huawei", 25, "azul", "si", 4, 150)
let moviles = [movil1, movil2, movil3, movil4]

let libreria:MobileLibrary = new MobileLibrary("nuevos","stock",moviles)

//console.log(libreria.totalPriceCalculation())

/*
for(let i=0; i<moviles.length; i++){
    moviles[i].totalPricecalculation()
    }
*/

libreria.printLibrary()