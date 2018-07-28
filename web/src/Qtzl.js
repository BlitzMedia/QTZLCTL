import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './styles/globalStyles'
import slugify from 'slugify'

import QTZLCTL from './components/qtzlctl'
import Home from './components/Home'
import Release from './components/Release'
import Artist from './components/Artist'

class Qtzl extends Component {
  state = {
    links: [],
    artists: [],
    releases: [],
    content: [],
    loaded: false,
    redirects: {
      'qtzlctl001-okasno-bamboo': 'QTZLCTL001',
      'qtzlctl002-nicola-cruz-lea': 'QTZLCTL002',
      'qtzlctl003-el-buho-quebrada': 'QTZLCTL003',
      'qtzlctl004-cross-echeyde-el-florida': 'QTZLCTL004',
      'qtzlctl005-okasno-almost-there': 'QTZLCTL005',
      'qtzlctl006-quixosis-aguas': 'QTZLCTL006',
      'qtzlctl007-rodrigo-gallardo-agua-de-la-tierra': 'QTZLCTL007',
      'qtzlctl008-quixosis-de-fiucher': 'QTZLCTL008',
      'qtzlctl009-jai-illusions': 'QTZLCTL009',
      'qtzlctl010-gorka-the-uncanny': 'QTZLCTL010',
      'qtzlctl011-di-laif-los-siete-dias': 'QTZLCTL011'
    }
  }

  async huntTheData() {
    // Check cache
    const cachedRecords = sessionStorage.getItem('releases')
    const cachedArtists = sessionStorage.getItem('artists')
    const cachedLinks = sessionStorage.getItem('links')

    if (cachedRecords && cachedArtists && cachedLinks) {
      this.setState({
        releases: JSON.parse(cachedRecords),
        artists: JSON.parse(cachedArtists),
        links: JSON.parse(cachedLinks),
        loaded: true
      })
      return
    }

    // Proceed with fetch
    const response = await fetch('/api/qtzlctl')
    console.log('Not Cached!')
    const data = await response.json()

    this.setTheData({
      releases: data.releases,
      artists: data.artists,
      links: data.links
    })
  }

  setTheData = (data) => {
    sessionStorage.setItem('releases', JSON.stringify(data.releases));
    sessionStorage.setItem('artists', JSON.stringify(data.artists));
    sessionStorage.setItem('links', JSON.stringify(data.links));

    this.setState({
      releases: data.releases,
      artists: data.artists,
      links: data.links,
      loaded: true
    })
  }

  componentDidMount() {
    this.huntTheData()
  }


  render() {
    const {releases, artists, links, loaded, redirects} = this.state
    artists.forEach(a => a.slug = slugify(a.fields.Name).toLowerCase())

    const releaseContent = releases.map(r => ({
      'name' : `#${r.fields.Release} | ${r.fields['Artist Name']} - ${r.fields.Name}`,
      'url': `/releases/${r.fields.Release}`
    }))
    const artistContent = artists.map(a => {
      const url = 'artists/' + slugify(a.fields.Name).toLowerCase()
      return {
        'name' : a.fields.Name,
        'url': url
      }
    })

    return (
      <div>
        <QTZLCTL hide={loaded} />

        <Switch>

          <Route exact path='/' render={({ match }) => (
            <Home content={releaseContent} links={links} match={match} />
          )} />

          <Route exact path='/artists' render={({ match }) => (
            <Home content={artistContent} links={links} match={match} />
          )} />
          <Redirect from="/qtzl-artists" to="/artists"/>

          {Object.keys(redirects).map((redirect, i) => {
            const where = `/releases/${redirect}`,
                  to = `/releases/${redirects[redirect]}`
            return <Redirect key={i} from={where} to={to} />
          })}

          <Route exact path='/releases/:id' render={({ match }) => {
            const release = releases.find(r => r.fields.Release === match.params.id)
            return <Release release={release} id={match.params.id} />
          }} />

          <Route exact path='/artists/:slug' render={({ match }) => {
            const artist = artists.find(a => a.slug === match.params.slug)
            const releases = this.state.releases.filter(r => r.fields['Artist Name'][0] === artist.fields['Name'])
            return <Artist artist={artist} releases={releases}/>
          }} />

          <Route render={({ match }) => (
            <Home content={releaseContent} links={links} match={match} />
          )} />
        </Switch>
      </div>
    )
  }
}
//

export default Qtzl
