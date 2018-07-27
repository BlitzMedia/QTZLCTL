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
    loaded: false
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
    const {releases, artists, links, loaded} = this.state
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
