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

    constructor (title, releaseYear,nationality, genre, foto)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
}

let peli1 = new Movie ("PasuYRodri",2021,"Spain","horror");

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
            let nationality = request.body.nationality;
            let genre = request.body.genre;
        
            peli1 = new Movie(title,releaseYear, nationality, genre)
            response.send(peli1)
    }
    else{
        respuesta = {error: true, codigo: 200,
                        mensaje: "la película ya existe", resultado:peli1}
        }

    response.send(respuesta)
});


app.put("/pelicula",
        function(request, response){
            let respuesta
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

    app.delete("/pelicula",
            function(request, response)
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

