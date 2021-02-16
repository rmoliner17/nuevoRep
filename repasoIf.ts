////EJ1 BIEN
function zodiac(dia:number, mes:string, anio:number):string
{
    if(dia <= 21 && mes == "marzo" || dia >= 19 && mes == "abril" ){
        return "eres Aries"
    }else if(dia <= 20 && mes == "abril" || dia >= 21 && mes == "mayo" ){ 
        return "eres Tauro"
    }else if(dia <= 21 && mes == "mayo" || dia >= 20 && mes == "junio" ){ 
        return "eres Géminis"
    }else if(dia <= 21 && mes == "junio" || dia >= 22 && mes == "julio" ){ 
        return "eres Cáncer"
    }else if(dia <= 23 && mes == "julio" || dia >= 22 && mes == "agosto" ){
        return "eres Leo"
    }else if(dia <= 23 && mes == "agosto" || dia >= 22 && mes == "septiembre" ){
        return "eres Virgo "
    }else if(dia <= 23 && mes == "septiembre" || dia >= 21 && mes == "octubre" ){
        return "eres Libra"
    }else if(dia <= 23 && mes == "octubre" || dia >= 21 && mes == "noviembre" ){
        return "eres Escorpio"
    }else if(dia <= 22 && mes == "noviembre" || dia >= 21 && mes == "diciembre" ){
        return "eres Sagitario"
    }else if(dia <= 22 && mes == "diciembre" || dia >= 19 && mes == "enero" ){
        return "eres Capricornio"
    }else if(dia <= 20 && mes == "enero" || dia >= 18 && mes == "febrero" ){
        return "eres Acuario"
    }else if(dia <= 19 && mes == "febrero" || dia >= 20 && mes == "marzo" ){
        return "eres Piscis"
    }else{
        return "no es una fecha valida"
    }
}

console.log(zodiac(21, "diciembre", 2000))



////EJ2 BIEN

function continente(pais)
{
    if (pais == "españa"){
        console.log("europa")
    }else if (pais == "francia"){
        console.log("europa")
    }else if (pais == "portugal"){
        console.log("europa")
    }else if(pais == "italia" ){
        console.log("europa")
    }else if (pais == "usa"){
        console.log("america del norte")
    }else if(pais =="mexico"){
        console.log("america del norte")
    }else if(pais =="canada"){
        console.log("america del norte")
    }else if(pais == "colombia" ){
        console.log("america del sur")
    }else if(pais == "brasil"){
        console.log("america del sur")
    }else if(pais == "venezuela" ){
        console.log("america del sur")
    }else if(pais == "marruecos"){
        console.log("africa")
    } else if(pais == "tunez"){
        console.log("africa")
    }else if(pais == "camerun"){
        console.log("africa")
    } else if(pais == "japon"){
        console.log("asia")
    }else if(pais =="china"){
        console.log("asia")
    }else if(pais == "vietnam"){
        console.log("asia")
    }else if(pais == "india"){
        console.log("asia")
    }else if(pais == "australia"){
        console.log("oceania")
    }else if(pais == "nueva celanda"){
        console.log("oceania")
    }else{console.log("antardida")
        }    
}

console.log(continente("india"))



///EJ5 BIEN

function arcoiris(array:string[]){
    for(let i=0; i<array.length; i++) 
    if(array[i] == "rojo"){
        console.log(array[i] + " es un color del arcoiris")
    }else if(array[i] == "naranja"){
        console.log(array[i] + " es un color del arcoiris")
    }else if(array[i] == "amarillo"){
        console.log(array[i] + " es un color del arcoiris")
    }else if(array[i] == "verde"){
        console.log(array[i] + " es un color del arcoiris")
    }else if(array[i] == "azul"){
        console.log(array[i] + " es un color del arcoiris")
    }else if(array[i] == "violeta"){
        console.log(array[i] + " es un color del arcoiris")
    }else {console.log("no es un color del arcoiris")
    }
}
let colores= ["verde", "azul", "rojo","gris"]
arcoiris(colores)


//EJ9 BIEN

function parImpar(number:number){
    if(number % 2 == 0){
        console.log("el numero es par")
    }else{
        console.log("el numero es impar")
    }
    
}
//parImpar(9)
