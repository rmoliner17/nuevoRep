import {Mobile}from "./Pag2Clase"

let movil1:Mobile = new Mobile("viejo", 3210," Nokia", 10," gris", "no", 1, 39)
let movil2:Mobile = new Mobile("iphone", 3, "Apple", 20, "blanco", "no", 2, 100) 
let movil3:Mobile = new Mobile("galaxy", 10, "samsung", 30, "negro", "si", 3, 200)
let moviles = [movil1, movil2, movil3]
/*console.log(movil1)
console.log(movil2)
console.log(movil3)*/


    for(let i=0; i<moviles.length; i++){
        moviles[i].printCarac()
    }


