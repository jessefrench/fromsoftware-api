const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const cors = require('cors')
app.use(cors())

require('dotenv').config({path: './.env'})

const games = {
    "demon's souls":{
        'developer': 'FromSoftware',
        'publishers': 'Japan Studio, Sony Interactive Entertainment',
        'directors': 'Hidetaka Miyazaki',
        'releaseYear': '2009',
        'releasePlatforms': 'PlayStation 3',
        'copiesSold': '135 thousand',
        'metacriticScore': '89'
    },
    'dark souls':{
        'developer': 'FromSoftware',
        'publishers': 'Bandai Namco',
        'directors': 'Hidetaka Miyazaki',
        'releaseYear': '2011',
        'releasePlatforms': 'PlayStation 3, Xbox 360',
        'copiesSold': '2.3 million',
        'metacriticScore': '89'
    },
    'dark souls ii':{
        'developer': 'FromSoftware',
        'publishers': 'Bandai Namco',
        'directors': 'Tomohiro Shibuya, Yui Tanimura',
        'releaseYear': '2014',
        'releasePlatforms': 'PlayStation 3, Xbox 360, PC',
        'copiesSold': '2.5 million',
        'metacriticScore': '91'
    },
    'dark souls iii':{
        'developer': 'FromSoftware',
        'publishers': 'Bandai Namco',
        'directors': 'Hidetaka Miyazaki, Isamu Okano, Yui Tanimura',
        'releaseYear': '2016',
        'releasePlatforms': 'PlayStation 4, Xbox One, PC',
        'copiesSold': '3.2 million',
        'metacriticScore': '89'
    },
    'bloodborne':{
        'developer': 'FromSoftware',
        'publishers': 'Sony Interactive Entertainment',
        'directors': 'Hidetaka Miyazaki',
        'releaseYear': '2015',
        'releasePlatforms': 'PlayStation 4',
        'copiesSold': '2 million',
        'metacriticScore': '92'
    },
    'sekiro':{
        'developer': 'FromSoftware',
        'publishers': 'Activision',
        'directors': 'Hidetaka Miyazaki, Kazuhiro Hamatani',
        'releaseYear': '2019',
        'releasePlatforms': 'PlayStation 4, Xbox One, PC',
        'copiesSold': '5 million',
        'metacriticScore': '91'
    },
    'elden ring':{
        'developer': 'FromSoftware',
        'publishers': 'Bandai Namco',
        'directors': 'Hidetaka Miyazaki, Yui Tanimura',
        'releaseYear': '2022',
        'releasePlatforms': 'PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC',
        'copiesSold': '20 million',
        'metacriticScore': '96'
    },
    'git gud':{
        'developer': 'Git Gud',
        'publishers': 'Git Gud',
        'directors': 'Git Gud',
        'releaseYear': 'Git Gud',
        'releasePlatforms': 'Git Gud',
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

app.listen(port, () => {
    console.log(`The server is running. Listening on port ${port}.`)
})