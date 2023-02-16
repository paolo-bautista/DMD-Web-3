const express = require('express')
const pokemon = require('./models/pokemon.js')
console.log(pokemon)
const app = express()
let port = 3000

app.listen(port, () => {
    console.log('I am listening')

    app.get('/pokemon', (req,res) => {
        res.render('index.ejs', {
            pokemonList: pokemon
        })
        
    })

    app.get('/pokemon/:id', (req,res) => {
        res.render('./show.ejs', {
            pokemon: pokemon[req.params.id]
        })
    })
})






