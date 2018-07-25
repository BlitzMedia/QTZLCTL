import express from 'express'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'

const endpoint = 'https://api.airtable.com/v0'
const base = 'apptg1boOr10IkCsY'
const table = 'releases'
const key = 'keyMmV8ObRgCW8YNy'

//var bodyParser = require('body-parser')
//var fetch = require('node-fetch')

const app = express()
app.use(bodyParser.json())

const getReleases = async(req, res) => {
  const url = `${endpoint}/${base}/${table}?api_key=${key}`

  const response = await fetch(url)
  const releases = await response.json()

  res.json(releases)
}

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/qtzlctl', getReleases)

//const port = process.env.PORT || 5000;
const port = 5000;
app.listen(port, () => console.log('Yo! This QTZL huntin! '))
