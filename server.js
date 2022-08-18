const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const games = {
    "demon's souls":{
        'releaseYear': 2009,
        'copiesSold': '135 thousand',
        'metacriticScore': 89
    },
    'dark souls':{
        'releaseYear': 2011,
        'copiesSold': '2.3 million',
        'metacriticScore': 89
    },
    'dark souls ii':{
        'releaseYear': 2014,
        'copiesSold': '2.5 million',
        'metacriticScore': 91
    },
    'dark souls iii':{
        'releaseYear': 2016,
        'copiesSold': '3.2 million',
        'metacriticScore': 89
    },
    'bloodborne':{
        'releaseYear': 2015,
        'copiesSold': '2 million',
        'metacriticScore': 92
    },
    'sekiro':{
        'releaseYear': 2019,
        'copiesSold': '5 million',
        'metacriticScore': 91
    },
    'elden ring':{
        'releaseYear': 2022,
        'copiesSold': '16.6 million',
        'metacriticScore': 96
    },
    'git gud':{
        'releaseYear': 'Git Gud',
        'copiesSold': 'Git Gud',
        'metacriticScore': 'Git Gud'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:gameTitle', (request, response) => {
    const titles = request.params.gameTitle.toLowerCase()
    if(games[titles]){
        response.json(games[titles])
    }else{
        response.json(games['git gud'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}.`)
})