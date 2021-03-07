const express = require ('express');
const { release } = require('os');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());





class Movie {
    // obtenerInstanciaIMDB(arg0) {
    //     throw new Error("Method not implemented.");
    // }

    constructor (title, releaseYear,nationality, genre, distributor,producer,mainCharacterName,isMCU, platform,languaje,writer,director,actors)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.nationality = nationality;
        this.director = director
        this.writer = writer
        this.languaje = languaje
        this.platform = platform    
        this.isMCU = isMCU
        this.mainCharacterName = mainCharacterName
        this.producer = producer 
        this.distributor = distributor 
        this.genre = genre;
    }
}

class Professional
{
    constructor (name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession)
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
let pro3 = new Professional ("louis",29,"male",77,180,"red","blue","caucasic",false,"mexican",0,"actor");
let pro4 = new Professional ("mao cao", 67, "action", 73, 150, "brown", "blue","asian",false,"chienese",1,"director")
let pro5 = new Professional ("pepe", 42, "horror", 89,183,"black","brown","spanish",true,"spanish",0,"writer")

let actors = [pro1, pro2, pro3]
let director = pro4
let writer = pro5


let peli1 = new Movie ("PasuYRodri",2021,"Spain","horror","disney", "fox", pro1.name, "HBO", "netflix","español", pro5, pro4, "spain", actors);




app.get('/pelicula/actor', function (request, response) 
{
    let id=request.query.id
    if(id != null)
    {
        if(request.query.id != null)
        response.send(peli1.actors[request.query.id])
    }
    else 
    {
        response.send(actors);
    }
    let respuesta
    if(peli1.actors != null)
    {
        respuesta = peli1.actors;
    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "La película no existe"}

        response.send(respuesta);}
});

app.get('/pelicula/director', function (request, response) 
{
    let respuesta
    if(peli1.director != null)
        respuesta = peli1.director;
    else
        respuesta = {error: true, codigo: 200, mensaje: "El director no existe"}

        response.send(respuesta);
});

app.get('/pelicula/guionista', function (request, response) 
{
    let respuesta
    if(peli1.writer != null)
        respuesta = peli1.writer;
    else
        respuesta = {error: true, codigo: 200, mensaje: "El guionista no existe"}

        response.send(respuesta);
});


app.post('/pelicula/actor', function(request, response)
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

    pro1 = new Professional (name, genre, weight, height, hairColor,
        eyeColor, race, retired, nationality,oscars, profession)
    actors.push(pro1)
    response.send(pro1)
        
})

app.post('/pelicula/director', function(request, response)
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

    pro4 = new Professional (name, genre, weight, height, hairColor,
        eyeColor, race, retired, nationality,oscars, profession)
    response.send(pro4)
        
})

app.post('/pelicula/guionista', function(request, response)
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

    pro5 = new Professional (name, genre, weight, height, hairColor,
        eyeColor, race, retired, nationality,oscars, profession)
    response.send(pro5)
        
})


app.put("/pelicula/actor",
        function(request, response){
            let respuesta
            if(peli1.actors[request.body.id] != null)
            {   
                id= request.body.id
                if(request.body.name != null)
                {
                    actors[id].name = request.body.name;
                }
                if(request.body.genre != null)
                {
                    actors[id].genre = request.body.genre;
                }
                if(request.body.weight != null)
                {
                    actors[id].weight = request.body.weight;
                }
                if(request.body.hairColor != null)
                {
                    actors[id].hairColor = request.body.hairColor;
                }
                if(request.body.eyeColor != null)
                {
                    actors[id].eyeColor = request.body.eyeColor;
                }
                if(request.body.race != null)
                {
                    actors[id].race = request.body.race;
                }
                if(request.body.retired != null)
                {
                    actors[id].retired = request.body.retired;
                }
                if(request.body.nationality != null)
                {
                    actors[id].nationality = request.body.nationality;
                }
                if(request.body.oscars != null)
                {
                    actors[id].oscars = request.body.oscars;
                }
                if(request.body.profession != null)
                {
                    actors[id].profession = request.body.profession;
                }
        
               respuesta = {error: false, codigo: 200, 
                            mensaje: "Actor actualizado", resultado: actors[request.body.id]};

                response.send(respuesta)
            }else{
                respuesta = {error: true, codigo: 200,
                    mensaje: "No hay actor", resultado: actors[request.body.id] 
               }
               response.send(respuesta)

        }
    });


app.put("/pelicula/guionista",
    function(request, response){
        let respuesta
        if(peli1.writer != null)
        {
            if(request.body.name != null)
            {
                peli1.writer.name = request.body.name;
            }
            if(request.body.genre != null)
            {
                peli1.writer.genre = request.body.genre;
            }
            if(request.body.weight != null)
            {
                peli1.writer.weight = request.body.weight;
            }
            if(request.body.hairColor != null)
            {
                peli1.writer.hairColor = request.body.hairColor;
            }
            if(request.body.eyeColor != null)
            {
                peli1.writer.eyeColor = request.body.eyeColor;
            }
            if(request.body.race != null)
            {
                peli1.writer.race = request.body.race;
            }
            if(request.body.retired != null)
            {
                peli1.writer.retired = request.body.retired;
            }
            if(request.body.nationality != null)
            {
                peli1.writer.nationality = request.body.nationality;
            }
            if(request.body.oscars != null)
            {
                peli1.writer.oscars = request.body.oscars;
            }
            if(request.body.profession != null)
            {
                peli1.writer.profession = request.body.profession;
            }
    
           respuesta = {error: false, codigo: 200, 
                        mensaje: "Guionista actualizado", resultado: peli1.writer};

            response.send(respuesta)
        }else{
            respuesta = {error: true, codigo: 200,
                mensaje: "No hay guionista", resultado:peli1.writer
           }
           response.send(respuesta)

    }
});

   
app.delete("/pelicula/actor",
function(request, response)
{
    let respuesta
        let id = request.body.id
    if (peli1.actors[id] != null)
    {
        respuesta = {error: false, codigo: 200, mensaje: "Actor borrado", resultado: actors[id]};
        actors.splice([id],1);
    }
    else    
        respuesta= {error:true, codigo:200, mensaje: "el Actor no existe", resultado: actors[id]};

        response.send(respuesta)
        
});

app.delete("/pelicula/director",
function(request, response)
{
        let respuesta
        if (peli1.director != null)
        {
            peli1.director = null;
            respuesta = {error: false, codigo: 200, mensaje: "Director borrado", resultado: peli1.director};
        }
        else    
            respuesta= {error:true, codigo:200, mensaje: "El director no existe", resultado: peli1.director};

            response.send(respuesta)
        
});

app.delete("/pelicula/guionista",
function(request, response)
{
        let respuesta
        if (peli1.writer != null)
        {
            peli1.writer = null;
            respuesta = {error: false, codigo: 200, mensaje: "Guionista borrado", resultado: peli1.writer};
        }
        else    
            respuesta= {error:true, codigo:200, mensaje: "El guionista no existe", resultado: peli1.writer};

            response.send(respuesta)
        
});


const fs = require("fs");
let nuevo = JSON.stringify(peli1);
fs.writeFileSync("apiRestPelicula.json",nuevo);

app.listen(3000);