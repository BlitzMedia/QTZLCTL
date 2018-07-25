import express from 'express'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'

const endpoint = 'https://api.airtable.com/v0'
const base = 'apptg1boOr10IkCsY'
const key = 'keyMmV8ObRgCW8YNy'

const app = express()
app.use(bodyParser.json())


// Fetch functions

const getReleases = async(req, res) => {
  const url = `${endpoint}/${base}/releases?api_key=${key}&&sortField=Release`

  const response = await fetch(url)
  const releases = await response.json()

  //return releases
  return releases.records
}

const getArtists = async(req, res) => {
  const url = `${endpoint}/${base}/artists?api_key=${key}`

  const response = await fetch(url)
  const artists = await response.json()

  //return artists
  res.json(artists)
}

const getLinks = async(req, res) => {
  const url = `${endpoint}/${base}/links?api_key=${key}&view=Grid%20view`


  const response = await fetch(url)
  const links = await response.json()

  return links.records
}

const getTheShit = async(req, res) => {
  // This is sequential, so...

  // Get the releases
  const releases = await getReleases()


  // Get the artists
  //const artists = await getArtists()

  // Get the links
  const links = await getLinks()

  res.json({releases, links})
}

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/qtzlctl', getTheShit)

//const port = process.env.PORT || 5000;
const port = 5000;
app.listen(port, () => console.log('Yo! This QTZL huntin! '))
