const fs = require('fs')

module.exports = {
    leerJSON: function() {
        let preguntasFrecuentesJSON = fs.readFileSync("./data/faqs.json", "utf-8")
        let preguntasFrecuentesParseado = JSON.parse(preguntasFrecuentesJSON)
        return preguntasFrecuentesParseado
    }
}