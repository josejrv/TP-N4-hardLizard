const fs = require ('fs')

module.exports ={
    leerJSON :function(){
            let sucursalesJSON = fs.readFileSync ("./data/theaters.json", "utf-8")
            let sucursalesParseado = JSON.parse(sucursalesJSON)
            return sucursalesParseado
    }
}