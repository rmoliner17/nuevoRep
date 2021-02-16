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

function continente(pais):string
{
    if(pais == "españa"){
        return "europa"
        }else if(
            pais == "francia"){
                return "europa"
        }else if(
            pais == "portugal"){
                return "europa"
        }else if(
            pais == "italia" ){
                return "europa"
        }else if (
            pais == "usa"){
        return "america del norte"
        }  else if(
            pais =="mexico"){
                return "america del norte"
        } else if(
            pais =="canada"){
                return "america del norte"
        }else if(
            pais == "colombia" ){
                return "america del sur"
        }else if(
            pais == "brasil"){
                return "america del sur"
        }else if(
            pais == "venezuela" ){
                return "america del sur"
        }else if(
            pais == "marruecos"){
                return "africa"
        } else if(
            pais == "tunez"){
                return "africa"
        }else if(
            pais == "camerun"){
            return "africa"
        } else if(
            pais == "japon"){
                return "asia"
        }else if(
            pais =="china"){
                return "asia"
        }else if(
            pais == "vietnam"){
                return "asia"
        }else if(
            pais == "india"){
            return "asia"
        }else if(
            pais == "australia"){
                return "oceania"
        } else if(
            pais == "nueva celanda"){
            return "oceania"
        } else{
            return "antardida"
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
