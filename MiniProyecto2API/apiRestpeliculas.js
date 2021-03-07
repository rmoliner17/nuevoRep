

const express = require ('express');
const { release } = require('os');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());



class Movie {


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
let pro6 = new Professional ("louis",29,"male",77,180,"red","blue","caucasic",false,"mexican",0,"writer")
let pro7 = new Professional ("mark",78,"male",90,190,"brown","brown","caucasic",true,"deutch",3,"director")
let pro8 = new Professional ("eva",54,"female",65,170,"red","green","caucasic",false,"russian",1,"director")
let peli1 = new Movie ("PasuYRodri",2021,"Spain","horror","disney", "fox", pro1.name, false, "netflix","español", pro5, pro4, actors);
let peli2 = new Movie ("adios", 1990,"horror", "spanish","TVE","HBO", pro1.name, false,"cutro", "english",pro6,pro7,actors)
let peli3 = new Movie ("hola", 2018,"action", "french","La 2","DaZON", pro1.name, true,"sexta", "frances",pro5,pro8,actors)
let peli5 = new Movie (null)

peliculas = [peli1,peli2,peli3]


//////Terminación de objetos y clases


app.get('/peliculas/', function (request, response) 
{
    let id=request.query.id
    if(id != null)
    {
        if(request.query.id != null)
        response.send(peliculas[request.query.id])
    }
    else 
    {
        response.send(peliculas);
    }
    let respuesta
    if(peliculas != null)
    {
        respuesta = peliculas;
    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "No hay peliculas"}

        response.send(respuesta);}
});


app.get('/peliculas/actor', function (request, response) 
{
    let respuesta
    let id=request.query.id
    if(id != null)
    {
        if(request.query.id != null)
        response.send(peliculas[request.query.id].actors)
    }
    else 
    {
        respuesta = {error: true, codigo: 200, mensaje: "El actor no existe"}

        response.send(respuesta);
    }
    if(peliculas != null)
    {
        respuesta = peliculas[request.query.id].actors;
    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "No hay actores"}

        response.send(respuesta);}
});

app.get('/peliculas/director', function (request, response) 
{
    let id=request.query.id
    if(id != null)
    {
        if(request.query.id != null)
        response.send(peliculas[request.query.id].director)
    }
    else 
    {
        response.send(peliculas[request.query.id].director);
    }
    let respuesta
    if(peliculas != null)
    {
        respuesta = peliculas[request.query.id].director;
    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "No hay director"}

        response.send(respuesta);}
});


app.get('/peliculas/guionista', function (request, response) 
{
    let id=request.query.id
    if(id != null)
    {
        if(request.query.id != null)
        response.send(peliculas[request.query.id].writer)
    }
    else 
    {
        response.send(peliculas[request.query.id].writer);
    }
    let respuesta
    if(peliculas != null)
    {
        respuesta = peliculas[request.query.id].writer;
    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "No hay guionista"}

        response.send(respuesta);}
});

app.put("/peliculas/actor",
    function(request, response){
        let respuesta

        if(actors[request.body.id])
        {
            id = request.body.id
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
            if(request.body.height != null)
            {
                actors[id].height = request.body.height;
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
            if(request.body.isRetired != null) 
            {
                actors[id].Retired = request.body.isRetired;
            }
            if(request.body.nationality != null) 
            {
                actors[id].nationality = request.body.nationality;
            }
            if(request.body.oscarsNumber != null)
            {
                actors[id].oscars = request.body.oscarsNumber;
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
                mensaje: "Su id no está identificado", resultado:actors[request.body.id]
        }
        response.send(respuesta)

    }
});

app.put("/peliculas/guionista",
    function(request, response){
        let respuesta
        if( peliculas[request.body.id].writer)
        {
            id = request.body.id
            if(request.body.name != null)
            {
                 peliculas[id].writer.name = request.body.name;
            }
            if(request.body.genre != null)
            {
                peliculas[id].writer.genre = request.body.genre;
            }
            if(request.body.weight != null)
            {
                peliculas[id].writer.weight = request.body.weight;
            }
            if(request.body.height != null)
            {
                 peliculas[id].writer.height = request.body.height;
            }
            if(request.body.hairColor != null)
            {
                 peliculas[id].writer.hairColor = request.body.hairColor;
            }
            if(request.body.eyeColor != null)
            {
                 peliculas[id].writer.eyeColor = request.body.eyeColor;
            }
            if(request.body.race != null)
            {
                 peliculas[id].writer.race = request.body.race;
            }
            if(request.body.isRetired != null) 
            {
                 peliculas[id].writer.Retired = request.body.isRetired;
            }
            if(request.body.nationality != null) 
            {
                 peliculas[id].writer.nationality = request.body.nationality;
            }
            if(request.body.oscarsNumber != null)
            {
                 peliculas[id].writer.oscars = request.body.oscarsNumber;
            }
            if(request.body.profession != null)
            {
                 peliculas[id].writer.profession = request.body.profession;
            }
    
        respuesta = {error: false, codigo: 200, 
                        mensaje: "Guionista actualizado", resultado: peliculas[request.body.id].writer};

            response.send(respuesta)
        }else{
            respuesta = {error: true, codigo: 200,
                mensaje: "Su id no está identificado", resultado: peliculas[request.body.id].writer
        }
        response.send(respuesta)

    }
});

app.put("/peliculas/director",
    function(request, response){
        let respuesta
        if( peliculas[request.body.id].director)
        {
            id = request.body.id
            if(request.body.name != null)
            {
                 peliculas[id].director.name = request.body.name;
            }
            if(request.body.genre != null)
            {
                peliculas[id].director.genre = request.body.genre;
            }
            if(request.body.weight != null)
            {
                peliculas[id].director.weight = request.body.weight;
            }
            if(request.body.height != null)
            {
                 peliculas[id].director.height = request.body.height;
            }
            if(request.body.hairColor != null)
            {
                 peliculas[id].director.hairColor = request.body.hairColor;
            }
            if(request.body.eyeColor != null)
            {
                 peliculas[id].director.eyeColor = request.body.eyeColor;
            }
            if(request.body.race != null)
            {
                 peliculas[id].director.race = request.body.race;
            }
            if(request.body.isRetired != null) 
            {
                 peliculas[id].director.Retired = request.body.isRetired;
            }
            if(request.body.nationality != null) 
            {
                 peliculas[id].director.nationality = request.body.nationality;
            }
            if(request.body.oscarsNumber != null)
            {
                 peliculas[id].director.oscars = request.body.oscarsNumber;
            }
            if(request.body.profession != null)
            {
                 peliculas[id].director.profession = request.body.profession;
            }
    
        respuesta = {error: false, codigo: 200, 
                        mensaje: "Director actualizado", resultado: peliculas[request.body.id].director};

            response.send(respuesta)
        }else{
            respuesta = {error: true, codigo: 200,
                mensaje: "Su id no está identificado", resultado: peliculas[request.body.id].director
        }
        response.send(respuesta)

    }
});




app.post('/peliculas', function(request, response)
{
   
    let title = request.body.title;
    let releaseYear = request.body.releaseYear;
    let actors = request.body.actors;
    let nationality = request.body.nationality;
    let director = request.body.director;
    let writer = request.body.writer;
    let languaje = request.body.languaje;
    let platform = request.body.platform ;  
    let isMCU = request.body.isMCU;
    let mainCharacterName = request.body.mainCharacterName
    let producer = request.body.producer ;
    let distributor = request.body.distributor 
    let genre = request.body.genre;

    peli10 = new Movie (title, releaseYear,nationality, genre, distributor,producer,mainCharacterName,isMCU, 
            platform,languaje,writer,director,actors)
            peliculas.push(peli10)
            let respuesta = "Su pelicula ha sido añadida correctamente"
    response.send(respuesta)
        
})



app.post('/peliculas/actor', function(request, response)
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

    pro10 = new Professional (name, genre, weight, height, hairColor,
        eyeColor, race, retired, nationality,oscars, profession)
    peliculas[request.body.id].actors.push(pro10)
    let respuesta = "Su actor ha sido añadido correctamente"
    response.send(respuesta)
        
})


app.post('/peliculas/director', function(request, response)
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

    pro10 = new Professional (name, genre, weight, height, hairColor,
        eyeColor, race, retired, nationality,oscars, profession)
        peliculas[request.body.id].director
    let respuesta = "Su director ha sido añadido correctamente"
    response.send(respuesta)
        
})

app.post('/peliculas/guionista', function(request, response)
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

    pro10 = new Professional (name, genre, weight, height, hairColor,
        eyeColor, race, retired, nationality,oscars, profession)
        peliculas[request.body.id].writer
    let respuesta = "Su guionista ha sido añadido correctamente"
    response.send(respuesta)
        
})


app.delete("/peliculas",
function(request, response)
{
    let respuesta
    if (peliculas != null)
    {
        peliculas.splice([request.body.id],1);
        respuesta = {error: false, codigo: 200, mensaje: "Pelicula borrada", resultado: peliculas};
    }
    else    
        respuesta= {error:true, codigo:200, mensaje: "la Pelicula no existe", resultado: peliculas};

        response.send(respuesta)
        
});

app.delete("/peliculas/actor",
function(request, response)
{
    let respuesta
    if (peliculas != null)
    {
        actors.splice([request.body.id],1);
        respuesta = {error: false, codigo: 200, mensaje: "Actor borrado", resultado: peliculas};
    }
    else    
        respuesta= {error:true, codigo:200, mensaje: "El actor no existe", resultado: peliculas};

        response.send(respuesta)
        
});

app.delete("/peliculas/director",
function(request, response)
{
    let respuesta
    if (peliculas != null)
    {
        director.splice([request.body.id],1);
        respuesta = {error: false, codigo: 200, mensaje: "director borrado", resultado: peliculas};
    }
    else    
        respuesta= {error:true, codigo:200, mensaje: "El director no existe", resultado: peliculas};

        response.send(respuesta)
        
});

app.delete("/peliculas/guionista",
function(request, response)
{
    let respuesta
    if (peliculas != null)
    {
        writer.splice([request.body.id],1);
        respuesta = {error: false, codigo: 200, mensaje: "Guionista borrado", resultado: peliculas};
    }
    else    
        respuesta= {error:true, codigo:200, mensaje: "El guionista no existe", resultado: peliculas};

        response.send(respuesta)
        
});
const fs = require("fs");
let nuevo = JSON.stringify(peliculas);
fs.writeFileSync("apiRestPeliculas.json",nuevo);

app.listen(3000);