///EJ6 BIEN
function par(array:number[]):boolean{
    let i:number=0
    let interruptor:boolean = true
    while(i<array.length && interruptor == true){
        if(array[i] % 2 == 0){
            i++
        }else{
            interruptor = false
        }
    }return interruptor
}
let prueba = [3,2]
console.log(par(prueba))


//EJ7 BIEN

function mNombres(array:string[]):boolean{
    let i:number=0
    let interruptor:boolean = true
    while(i<array.length && interruptor == true){
        if(array[i][0] == "m"){
            i++
        }else {
            interruptor = false
        }
    } return interruptor
}
let names = ["ar","mario","maria"]
console.log(mNombres(names))