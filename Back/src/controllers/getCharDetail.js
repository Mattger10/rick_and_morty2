const axios = require('axios');
// const { character } = require('..model/character')

const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.data)
    .then(data => {
        let character = {
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin?.name
        }
        res
        .writeHead(200, {"Contetn-type": "application/json"})
        .end(JSON.stringify(character))
    })
    .catch(err => res.writeHead(500, {"Content-type": "text/plain"})
    .end(`El personaje con id:${id} no fue encontrado`)
    )
}


module.exports = getCharDetail;