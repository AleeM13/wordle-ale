const PORT = 8000
const axios = require("axios").default
const express = require("express")
const cors = require("cors")
require('dotenv').config()
const app = express()

app.use(cors())

app.get('/word', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://www.palabrasaleatorias.com/?fs=5&fs2=0&Submit=Nueva+palabra',
        params: {count: '5', wordLength: '5'},
        headers: {
            'x-rapidapi-host': 'https://www.palabrasaleatorias.com/?fs=5&fs2=0&Submit=Nueva+palabra',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    }
    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data[0])
    }).catch((error) => {
        console.error(error)
    })
})


app.get('/check', (req, res) => {
    const word = req.query.word

    const options = {
        method: 'GET',
        url: 'https://www.palabrasaleatorias.com/?fs=5&fs2=0&Submit=Nueva+palabra',
        params: {entry: word},
        headers: {
            'x-rapidapi-host': 'https://www.palabrasaleatorias.com/?fs=5&fs2=0&Submit=Nueva+palabra',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    }
    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data.result_msg)
    }).catch((error) => {
        console.error(error)
    })
})


app.listen(PORT, () => console.log('Server running on port ' + PORT))