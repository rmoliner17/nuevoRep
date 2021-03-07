const express = require ('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());


class Professional
 {
 
 
     constructor (name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession, foto)
     {
         this.name = name;
         this.age = age;
         this.genre = genre;
         this.weight = weight;
         this.height = height;
         this.hairColor = hairColor;
         this.eyeColor = eyeColor;
         this.race = race;
         this.isRetired = isRetired;
         this.nationality = nationality;
         this.oscarsNumber = oscarsNumber;
         this.profession = profession;
     }
}

let pro1 = new Professional ("mike",17,"male",80,178,"brown","brown","caucasic",false,"spanish",0,"actor");
let pro2 = new Professional ("hanna",37,"female",60,170,"black","green","caucasic",false,"greek",2,"actor");
let pro3 = new Professional ("louis",29,"male",77,180,"red","blue","caucasic",false,"mexican",0,"writer");
let pro4 = new Professional ("mao cao", 67, "action", 73, 150, "brown", "blue","asian",false,"chienese",1,"director")
let pro5 = new Professional ("pepe", 42, "horror", 89,183,"black","brown","spanish",true,"spanish",0,"writer")

let profesionales = [pro1, pro2, pro3, pro4, pro5]


///////////////MINI  -  PROYECTO/////////////

app.get("/profesionales", function(request, response)
{   
    if(request.query.id != null)
        {response.send(profesionales[request.query.id])
    }else 
    {
        response.send(profesionales)
    }
})

app.post('/profesionales', function (request, response)
{
     
    let name = request.body.name;
    let genre = request.body.genre;
    let weight = request.body.weight;
    let height = request.body.height;
    let hairColor = request.body.hairColor;
    let eyeColor = request.body.eyeColor;
    let race = request.body.race;
    let retired = request.body.isRetired;
    let nationality = request.body.nationality;
    let oscars = request.body.oscarsNumber;
    let profession = request.body.profession;

    proNuevo = new Professional(name, genre, weight, height, hairColor,
            eyeColor, race, retired, nationality,oscars, profession)
            profesionales.push(proNuevo)
    response.send(proNuevo)
});


app.put("/profesionales",
    function(request, response){
        let respuesta

        if(profesionales[request.body.id])
        {
            id = request.body.id
            if(request.body.name != null)
            {
                profesionales[id].name = request.body.name;
            }
            if(request.body.genre != null)
            {
                profesionales[id].genre = request.body.genre;
            }
            if(request.body.weight != null)
            {
                profesionales[id].weight = request.body.weight;
            }
            if(request.body.height != null)
            {
                profesionales[id].height = request.body.height;
            }
            if(request.body.hairColor != null)
            {
                profesionales[id].hairColor = request.body.hairColor;
            }
            if(request.body.eyeColor != null)
            {
                profesionales[id].eyeColor = request.body.eyeColor;
            }
            if(request.body.race != null)
            {
                profesionales[id].race = request.body.race;
            }
            if(request.body.isRetired != null) 
            {
                profesionales[id].Retired = request.body.isRetired;
            }
            if(request.body.nationality != null) 
            {
                profesionales[id].nationality = request.body.nationality;
            }
            if(request.body.oscarsNumber != null)
            {
                profesionales[id].oscars = request.body.oscarsNumber;
            }
            if(request.body.profession != null)
            {
                profesionales[id].profession = request.body.profession;
            }
    
        respuesta = {error: false, codigo: 200, 
                        mensaje: "profesional actualizado", resultado: profesionales[request.body.id]};

            response.send(respuesta)
        }else{
            respuesta = {error: true, codigo: 200,
                mensaje: "Su id no está identificado", resultado:profesionales[request.body.id]
        }
        response.send(respuesta)

    }
});

app.delete("/profesionales",
function(request, response)
{
    let respuesta
    if (profesionales != null)
    {
        profesionales.splice([request.body.id],1);
        respuesta = {error: false, codigo: 200, mensaje: "Profesional borrado", resultado: profesionales};
    }
    else    
        respuesta= {error:true, codigo:200, mensaje: "el Profesional no existe", resultado: profesionales};

        response.send(respuesta)
        
});


const fs = require("fs");
let nuevo = JSON.stringify(profesionales);
fs.writeFileSync("apiRestProfesionales.json",nuevo);

app.listen(3000);