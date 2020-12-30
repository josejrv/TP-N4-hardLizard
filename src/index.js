let homePage = require('./homePage')
const sucursales = require("./sucursales")
const enCartelera = require('./enCartelera')

const preFrecuentes = require('./preguntasFrecuentes')
const masVotadas = require("./masVotadas")

let movies = homePage.leerJSON()
let teatros = sucursales.leerJSON()
let cartelera = enCartelera.leerJSON()
let votadas = masVotadas.leerJSON()
let preguntasFrecuentes = preFrecuentes.leerJSON()
let mayor7 = masVotadas.mayor7()


module.exports = {
    homePage: function(req, res) {
        res.write("\n")
        res.write("​    𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐𝒔 𝒂 𝑫𝑯 𝑴𝒐𝒗𝒊𝒆𝒔 𝒆𝒍 𝒎𝒆𝒋𝒐𝒓 𝒔𝒊𝒕𝒊𝒐 𝒑𝒂𝒓𝒂 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓 𝒍𝒂𝒔 𝒎𝒆𝒋𝒐𝒓𝒆𝒔 𝒑𝒆𝒍𝒊́𝒄𝒖𝒍𝒂𝒔, 𝒊𝒏𝒄𝒍𝒖𝒔𝒐 𝒎𝒖𝒄𝒉𝒐 𝒎𝒆𝒋𝒐𝒓 𝒒𝒖𝒆 𝑵𝒆𝒕𝒇𝒍𝒊𝒙, 𝑪𝒖𝒆𝒗𝒂𝒏𝒂 𝒚 𝑷𝒐𝒑𝑪𝒐𝒓𝒏​​​​​​​​​​​​​​​​​​​​...")
        res.write("\n\n")
        res.write("\n ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ \n")
        res.write("  LA CANTIDAD DE PELICULAS QUE TENEMOS SON : " + movies.movies.length)
        
        res.write("\n ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ≛ ")
        res.write("\n\n")

        movies.movies.sort(function(a, b) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        movies.movies.forEach(movie => {
            res.write("\n ★ " + movie.title + '\n\n')

        });
        res.write(`     
                        ☑ En Cartelera(/en-cartelera)
                        ✎ Mas Votadas(/mas-votadas)
                        圓 Sucursales(/sucursales)
                        ✉ Contacto(/contacto)
                        ¿¿ Preguntas Frecuentes(/preguntas-frecuentes)        
        `)



        res.end()
    },
    enCartelera: function(req, res) {
        res.write("  Eɴ Cᴀʀᴛᴇʟᴇʀᴀ")
        res.write("\n\n")
        res.write("Cantidad de pelicula " + movies.movies.length)
        res.write("\n\n")
        movies.movies.forEach(movie => {
            res.write("˗ ˗ ˗ ˗ ˗")
            res.write(movie.title)
            res.write("˗ ˗ ˗ ˗ ˗")
            res.write("\n\n")
            res.write(movie.overview + '\n')
            res.write("\n\n")
        });
        res.end()
    },

    sucursales: function(req, res) {
        teatros.theaters.forEach(teatro => {
            res.write(`${"·"}${teatro.name}${"·"}\n\n${"-"}${teatro.address}\n\n${"-"}${teatro.description}\n${teatro.total_rooms}\n\n`)


        })
        res.end()


    },

    contacto: function(req, res) {
      
        res.write(`
                    ++++++++++++++++++
                        Contactanos
                    ++++++++++++++++++`)
        res.write("\n\n\n\n\n")
        res.write(`
        
        ¿Tenés algo para contarnos? Nos encanta escuchar a nuestros
        clientes. Si deseas contactarnos podés escribirnos al siguiente email:
        dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta,
        sugerencia o reclamo y será respondido a la brevedad posible. Recordá que
        también podes consultar la sección de Preguntas Frecuentes para obtener
        respuestas inmediatas a los problemas más comunes.`)
        res.end()
    },
    prefuntasFrecuentes: function(req, res) {
        res.write("Preguntas Frecuentes")
        res.write("\n\n")
        res.write("- El total de preguntas es: " + preguntasFrecuentes.faqs.length)
        preguntasFrecuentes.faqs.forEach(element => {
            res.write("\n\n")
            res.write("Pregunta: " + element.faq_title)
            res.write("\n\n")
            res.write("Respuesta: " + element.faq_answer)

        });

        res.end()

    },
    masVotadas: function(req, res) {
        res.write("---Mas Votadas---")
        res.write("\n\n")
        res.write("Cantidad de pelicula " + masVotadas.mayor7().length)
        res.write("\n\n")
        res.write("El rating promedio es " + masVotadas.ratinAvg())
        res.write("\n\n")
        movies.movies.forEach(movie => {
            if (movie.vote_average>=7) {
                res.write('- ' + movie.title + '\n\n')
                res.write('- ' + movie.vote_average + '\n\n')
                res.write('- ' + movie.overview + '\n\n')
            }
            
        });


        res.end()
    },
  
    
    
        
}
