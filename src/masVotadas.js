const fs = require ('fs')

module.exports ={
    leerJSON :function(){
            let masVotadasJSON = fs.readFileSync ("./data/movies.json", "utf-8")
            let masVotadasParseado = JSON.parse(masVotadasJSON)
            return masVotadasParseado
    },

    mayor7 : function(){
        let peliculas = this.leerJSON()

        let peliculasFiltrdas = peliculas.movies.filter(function(pelicula){
            return pelicula.vote_average >= 7 
        })
        return peliculasFiltrdas
    },

    ratinAvg : function(){
        let peliculas = this.mayor7()

        let rating = peliculas.map(function(pelicula){
            return pelicula.vote_average
        })

        let sumaRating = rating.reduce(function(acum, rating){
            return acum + rating
        })

        let promedio = sumaRating / peliculas.length
       
        return promedio.toFixed(1)
    }
}