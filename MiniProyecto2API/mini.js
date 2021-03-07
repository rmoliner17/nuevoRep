const express = require ('express');
const { release } = require('os');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.listen(3000);

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

let peli1 = new Movie ("PasuYRodri",2021,"Spain","horror","disney", "fox", pro1.name, false, "netflix","español", pro5, pro4, actors);


// peli1.profesionales.actor
// peli1.profesionales.actor[1]

/////////////////////////////1

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
///////////////////////////2
app.get('/pelicula', function (request, response) 
{
    let respuesta
    if(peli1 != null)
        respuesta = peli1;
    else
        respuesta = {error: true, codigo: 200, mensaje: "La película no existe"}

        response.send(respuesta);
});

app.post('/pelicula', function (request, response)
{
    peli1 = null;
    let respuesta;
    if (peli1 === null)
    { 
        let title = request.body.title;
        let releaseYear = request.body.releaseYear;
        let actors = request.body.actors;
        let nationality = request.body.nationality;
        let director = request.body.director
        let writer = request.body.writer
        let languaje = request.body.languaje
        let platform = request.body.platform    
        let isMCU = request.body.isMCU
        let mainCharacterName = request.body.mainCharacterName
        let producer = request.body.producer 
        let distributor = request.body.distributor 
        let genre = request.body.genre;
    
        peli1 = new Movie(title, releaseYear,nationality, genre, distributor,producer,mainCharacterName,isMCU, platform,languaje,writer,director,actors)
        response.send(peli1)
    }
    else{
        respuesta = {error: true, codigo: 200,
                        mensaje: "la película ya existe", resultado:peli1}
        }

    response.send(respuesta)
});


app.put("/pelicula", function(request, response)
{let respuesta
    if(peli1 != null)
    {
        if(request.body.title != null)
        {
            peli1.title = request.body.title;
        }
        if(request.body.releaseYear != null)
        {
            peli1.releaseYear = request.body.releaseYear;
        }
        if(request.body.nationality != null)
        {
            peli1.nationality = request.body.nationality;
        }
        if(request.body.genre != null)
        {
            peli1.genre = request.body.genre;
        }
        if(request.body.distributor != null)
        {
            peli1.distributor = request.body.distributor;
        }
        if(request.body.producer != null)
        {
            peli1.producer = request.body.producer;
        }
        if(request.body.mainCharacterName != null)
        {
            peli1.mainCharacterName = request.body.mainCharacterName;
        }
        if(request.body.isMCU != null)
        {
            peli1.isMCU = request.body.isMCU;
        }
        if(request.body.platform != null)
        {
            peli1.platform = request.body.platform;
        }
        if(request.body.languaje != null)
        {
            peli1.languaje = request.body.languaje;
        }
        if(request.body.director != null)
        {
            peli1.director = request.body.director;
        }
        if(request.body.writer != null)
        {
            peli1.writer = request.body.writer;
        }
        if(request.body.actors != null)
        {
            peli1.actors = request.body.actors;
        }

        respuesta = {error: false, codigo: 200, 
                    mensaje: "Pelicula actualizado", resultado: peli1};

        response.send(respuesta)
    }else{
        respuesta = {error: true, codigo: 200,
            mensaje: "No hay pelicula", resultado:peli1
        }
        response.send(respuesta)

}
});

app.delete("/pelicula",function(request, response)
{
    let respuesta
    if (peli1 != null)
    {
        peli1 = null;
        respuesta = {error: false, codigo: 200, mensaje: "Pelicula borrada", resultado: peli1};
    }
    else    
        respuesta= {error:true, codigo:200, mensaje: "La pelicula no existe", resultado: peli1};

        response.send(respuesta)
        
});


//////////////////////////////////

/////////////////////3

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
    let respuesta = "tu actor ha sido añadido"
    response.send(respuesta)
        
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

    pro1 = new Professional (name, genre, weight, height, hairColor,
        eyeColor, race, retired, nationality,oscars, profession)
    response.send(pro1)
        
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
                let id= request.body.id
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


app.put("/pelicula/guionista",
    function(request, response){
        let respuesta
        if(peli1.director != null)
        {
            if(request.body.name != null)
            {
                peli1.director.name = request.body.name;
            }
            if(request.body.genre != null)
            {
                peli1.director.genre = request.body.genre;
            }
            if(request.body.weight != null)
            {
                peli1.director.weight = request.body.weight;
            }
            if(request.body.hairColor != null)
            {
                peli1.director.hairColor = request.body.hairColor;
            }
            if(request.body.eyeColor != null)
            {
                peli1.director.eyeColor = request.body.eyeColor;
            }
            if(request.body.race != null)
            {
                peli1.director.race = request.body.race;
            }
            if(request.body.retired != null)
            {
                peli1.director.retired = request.body.retired;
            }
            if(request.body.nationality != null)
            {
                peli1.director.nationality = request.body.nationality;
            }
            if(request.body.oscars != null)
            {
                peli1.director.oscars = request.body.oscars;
            }
            if(request.body.profession != null)
            {
                peli1.director.profession = request.body.profession;
            }
    
           respuesta = {error: false, codigo: 200, 
                        mensaje: "Director actualizado", resultado: peli1.director};

            response.send(respuesta)
        }else{
            respuesta = {error: true, codigo: 200,
                mensaje: "No hay Director", resultado:peli1.director
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

///////////////////////////////4
let pro6 = new Professional ("louis",29,"male",77,180,"red","blue","caucasic",false,"mexican",0,"writer")
let pro7 = new Professional ("mark",78,"male",90,190,"brown","brown","caucasic",true,"deutch",3,"director")
let pro8 = new Professional ("eva",54,"female",65,170,"red","green","caucasic",false,"russian",1,"director")
//let peli1 = new Movie ("PasuYRodri",2021,"Spain","horror","disney", "fox", pro1.name, false, "netflix","español", pro5, pro4, actors);
let peli2 = new Movie ("adios", 1990,"horror", "spanish","TVE","HBO", pro1.name, false,"cutro", "english",pro6,pro7,actors)
let peli3 = new Movie ("hola", 2018,"action", "french","La 2","DaZON", pro1.name, true,"sexta", "frances",pro5,pro8,actors)
let peli5 = new Movie (null)




peliculas = [peli1,peli2,peli3]

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
        /////////////////deletes funcionan todos
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