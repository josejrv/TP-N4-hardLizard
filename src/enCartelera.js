const fs = require ('fs')

module.exports ={
    leerJSON :function(){
            let enCarteleraJSON = fs.readFileSync ("./data/theaters.json", "utf-8")
            let enCarteleraParseado = JSON.parse(enCarteleraJSON)
            return enCarteleraParseado
    }
}