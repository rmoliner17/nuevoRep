
import {Mobile}from "./Pag2"
import {MobileLibrary}from "./Pag3"

let movil1:Mobile = new Mobile("iphone", 8," apple", 10," gris", "no", 1, 39)
let movil2:Mobile = new Mobile("redmi", 12, "Xiaomi", 25, "verde", "si", 2, 350) 
let movil3:Mobile = new Mobile("x", 10, "motorola", 30, "negro", "si", 3, 200)
let movil4:Mobile = new Mobile("one", 8, "blackberry", 25, "azul", "si", 4, 150)
let moviles = [movil1, movil2, movil3, movil4]

let libreriaNueva:MobileLibrary = new MobileLibrary("nuevos","stock",moviles) 