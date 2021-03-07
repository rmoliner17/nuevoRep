
//////////////clases
 
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
        this.foto = foto;
    }


    toString() {
        
        return this.name + this.age + this.genre

     }
    
}

 class Imdb
{

    constructor(peliculas)

    {
        this.peliculas = peliculas
    }
    
    printMovie()
    {
        console.log(this.peliculas)
    }

    escribirEnFicheroJSON (nombreFichero)
    {
        const fs = require("fs");
        let nuevo = JSON.stringify(this);
        fs.writeFileSync(nombreFichero,nuevo);
    }

    obtenerInstanciaIMDB(nombreFichero)
    {
        const fs = require("fs")
        // let retorno = fs.readFileSync(nombreFichero, "utf-8");
        // let fichero = JSON.parse(retorno)
        // return fichero;
        let vacio = new Imdb ([]);
        fs.readFileSync (nombreFichero);
        vacio.peliculas=JSON.parse(fs.readFileSync(nombreFichero)).peliculas
        return vacio;

    }


    
}


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
        this.foto = foto
    }
    printMovie()
    {
        let datos;

        for (let i = 0; i<this.actors.length; i++)
        {
            datos.push(this.actors[i].printProfessional());
        }
        return `${this.title},${this.releaseYear},${datos},${this.nationality},${this.director.printProfessional()},${this.writer.printProfessional()},${this.language},${this.platform},${this.isMCU},${this.mainCharacterName},${this.producer},${this.distributor},${this.genre}`
    }

}

//////////////objetos

let pro1 = new Professional ("mike",17,"male",80,178,"brown","brown","caucasic",false,"spanish",0,"actor","https://im-media.voltron.voanews.com/Drupal/02live-246/styles/sourced/s3/2019-08/C975CDD7-2C9F-4928-BED8-C412E3F68B20.jpg?itok=vesfvqKB");
let pro2 = new Professional ("hanna",37,"female",60,170,"black","green","caucasic",false,"greek",2,"actress","https://los40es00.epimg.net/los40/imagenes/2018/10/09/cinetv/1539080612_321993_1539080975_noticia_normal.jpg");
let pro3 = new Professional ("louis",29,"male",77,180,"red","blue","caucasic",false,"mexican",0,"writer","https://postposmo.com/wp-content/uploads/2019/11/trumbo_peliculas_de_escritores.jpg");
let pro4 = new Professional ("mao cao", 67, "action", 73, 150, "brown", "blue","asian",false,"chienese",1,"actor", "https://f.rpp-noticias.io/2019/04/18/214521_779805.jpg")
let pro5 = new Professional ("pepe", 42, "horror", 89,183,"black","brown","spanish",true,"spanish",0,"writer","https://www.literautas.com/es/blog/wp-content/uploads/desmontando-a-harry.jpg")
let pro7 = new Professional ("mark",78,"male",90,190,"brown","brown","caucasic",true,"deutch",3,"director","https://lh3.googleusercontent.com/proxy/T1M_nuoOMPSkqqPhKHnYWSCUEZlTZbuc1qgHsyZh2ThjvDpanBmjlltz_j2aSPypgxOCNgLZIINUphcfRcSZlZ48nHcXHrUexWGr8lr4zugnCQLA0jaV9u8RC7AjLhjR2ZzYExu85zbhBzOxFUElULKNLGHabbOcp0HZ");
let pro8 = new Professional ("eva",54,"female",65,170,"red","green","caucasic",false,"russian",1,"director","https://cinealojo.files.wordpress.com/2010/09/michael-mann-un-director-extremo1.jpg");
let pro9 = new Professional ("james",42,"male",80,183,"black","blue","caucasic",false,"bosnian",0,"actor", "https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/190350.png");


let peli1 = new Movie ("PasuYRodri",2021,"Spain","horror","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyKOXBMuc5pz3_26RoL9o9PPBMK1uT72XVg&usqp=CAU");
let peli2 = new Movie ("adios", 1990,"horror", "spanish","https://lamanodelextranjero.files.wordpress.com/2015/03/cartel-americano-de-hello-dolly.jpg")
let peli3 = new Movie ("hola", 2018,"action", "french","http://es.web.img2.acsta.net/medias/nmedia/18/95/65/62/20420898.jpg")
let peli4 = new Movie ("Gladiator", 1995, "american", "action","https://pics.filmaffinity.com/Gladiator-368149580-large.jpg")

// let peliN = new Movie (title,realeaseYear,nationality,genero)

let todasPelis = new Imdb ([peli1, peli2, peli3, peli4])


///////////////////Contenido pelis

peli1.platform = "TV"
peli1.isMCU = false
peli1.mainCharacterName = pro2.name;
peli1.distributor = "HBO";
peli1.producer = "Disney";
peli1.language = "french";
peli1.writer = pro5
peli1.director= pro7
peli1.actors= [pro9,pro4,pro1];

//

peli2.platform = "CS"
peli2.isMCU = false
peli2.mainCharacterName = pro1.name;
peli2.distributor = "SONY";
peli2.producer = "ABC";
peli2.language = "german";
peli2.writer = pro3;
peli2.director= pro8;
peli2.actors = [pro1,pro2,pro9];

//

peli3.platform = "netflix"
peli3.isMCU = true
peli3.mainCharacterName = pro9.name
peli3.distributor = "SONY";
peli3.producer = "FOX";
peli3.language = "german";
peli3.writer = pro5;
peli3.director= pro7;
peli3.actors = [pro1,pro2,pro4];

//

peli4.platform = "movistar"
peli4.isMCU = true
peli4.mainCharacterName = pro2.name
peli4distributor = "ESPN";
peli4.producer = "FOX";
peli4.language = "english";
peli4.writer = pro3;
peli4.director= pro8;
peli4.actors = [pro1,pro2,pro9];

///////////////////////////funciones

$(document).ready(function() {
    
    $(".card").click(function(){
        $("#peli1").show(1000);
    });

    $(".card").click(function(){
        $("#peli2").show(1000);
    });
    
    $(".card").click(function(){
        $("#peli3").show(1000);
    });

});




function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


function mostarPelis(){

}

let datos1 = []
function recogerDatos (){

    let titulo = document.getElementById("titulo").value
    let anyoEstreno = document.getElementById("anyoEstreno").value
    let nacionalidad= document.getElementById("nacionalidad").value
    let genero = document.getElementById("genero").value
    let datos1 = {
        "titulo": titulo,
        "anyoEstreno": anyoEstreno,
        "nacionalidad": nacionalidad,
        "genero":genero,
    }   
     let inputPelicula = new Movie (titulo, anyoEstreno, nacionalidad, genero," https://tentulogo.com/wp-content/uploads/2018/07/pixar-logo.jpg")

     todasPelis.peliculas.push(inputPelicula)
    addTarjeta(inputPelicula, "carrusel2")
    // datos.push(datos1)
    console.log(datos1)

     
}

/* for(let i = 0; i<todasPelis.peliculas.length;i++){
    addTarjeta(todasPelis.peliculas[i], "carrusel1")
}
*/

function addTarjeta (peli, identificador) {

    let txt = 
    `<div class="col">
        <div class="card imagenes1 bg-light" style="width: 14rem;">
            <img src="` + peli.foto +`" alt="...">
            <div class="card-body">
                <h5 class="card-title">` + peli.title + `</h5>
                <p class="card-text">`+ peli.releaseYear + `</p>
                <p class="card-text">`+ peli.nationality + `</p>
                <p class="card-text">`+ peli.genre + `</p> 
                <a  href="#" onclick=$(this).siblings(".contenidoColapsable").addClass("show") class="btn btn-success">INFO</a>
                <div class = "collapse contenidoColapsable">
                    <p class="card-text">`+peli.platform + `</p>
                    <p class="card-text">`+peli.isMCU +  `</p>
                    <p class="card-text">`+peli.mainCharacterName + `</p>
                    <p class="card-text">`+peli.distributor +`</p>
                    <p class="card-text">`+ peli.producer + `</p>
                    <p class="card-text">`+ peli.language  +`</p>
                    <p class="card-text">`+ peli.writer  +`</p>
                    <p class="card-text">`+ peli.director +`</p>
                    <p class="card-text">`+  peli.actors +`</p>
                    <a  href="#" onclick=$(this).parent().removeClass("show") class="btn btn-success">OCULTAR</a>
                </div>
            </div>
        </div>
    </div>`;

    
    console.log(identificador)
    console.log("#" + identificador)
    console.log($("#" + identificador))
    $("#" + identificador).append(txt);
   
}

function collapseTarjeta(){
    $(button). addClass("show")
}




{/* <div class="myRow" >
<div class="row">
    <form action="">
            <input id="titulo" type="text" placeholder= "Titulo de la pelicula"> 
            <input id="anyoEstreno" type="number"placeholder=" Año de estreno" >
            <input id="nacionalidad" type="text"placeholder="Nacionalidad">
            <input id="genero" type="text"placeholder="Genero">
            <button class="btn btn-outline-dark" type="button" onclick="recogerDatos()">Buscar</button>
    </form>
</div>
</div> */}