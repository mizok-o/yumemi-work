const port = 8080
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

const option = {
  method: 'GET',
  headers: {
    'x-api-key': process.env.Resas_APIKEY,
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

app.get('/prefs', (req, res) => {
  const url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'
  axios.get(url, option)
  .then(response => {
    res.json(response.data)
  })
})

app.get('/graph', (req, res) => {
  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=1`
  axios.get(url, option)
  .then(response => {
    res.json(response.data)
  })
})

app.listen(8000, () => console.log(`server running ${port}`))
