export class Mobile {

    ///declaracion de propiedas publicas
   
    private name:string
    private model:number
    private trademark:string
    private sdSize:number
    private color:string
    private is5g:string
    private cameraNumber:number
    private price:number
   
   
    ///implementacion del metodo constructor
       constructor(name:string, model:number, trademark:string, sdSize:number, color:string, is5g:string, cameraNumber:number, price:number){
   
           this.name = name
           this.model = model
           this.trademark = trademark
           this.sdSize = sdSize
           this.color =color
           this.is5g = is5g
           this.cameraNumber = cameraNumber
           this.price = price
   
       }
           ///implementacion getters y setters
           
           private getName():string
           {
               return this.name
           }
   
           private getModel():number
           {
               return this.model
           }
   
           private getTrademark():string
           {
               return this.trademark
           }
   
           private getsdSize():number
           {
               return this.sdSize
           }
   
           private getColor():string
           {
               return this.color
           }
   
           private getIs5g():string
           {
               return this.is5g
           }
   
           private getCameraNumber():number
           {
               return this.cameraNumber
           }
   
           private getPrice():number
           {
               return this.price
           }
       
           private setName(newName:string)
           {
               this.name=newName
           }
          
           private setModel(newModel:number)
           {
               this.model=newModel
           }
   
           private setTrademark(newTrademark:string)
           {
               this.trademark=newTrademark
           }
   
           private setSdSize(newSdSize:number)
           {
               this.sdSize=newSdSize
           }
   
           private setColor(newColor:string)
           {
               this.color=newColor
           }
   
           private setIs5G(newIs5G:string)
           {
               this.is5g=newIs5G
           }
   
           private setCameraNumber(newCameraNumber:number)
           {
               this.cameraNumber=newCameraNumber
           }
       
   
           public printCarac()
           {
               console.log("Name : " + this.name + "\nModel : " + this.model + "\nTrademark : " + this.trademark + "\nSD Size (GB : " + this.sdSize + "\nColor : " + this.color +"\nis 5g? : "+ this.is5g + "\nNumber of cameras : " + this.cameraNumber)
           }
   }