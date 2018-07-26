import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { css } from 'emotion'
import './styles/globalStyles'

import QTZLCTL from './components/qtzlctl'
import Home from './components/Home'
import ReleaseItem from './components/releaseItem'

class Qtzl extends Component {
  state = {
    links: [],
    releases: [],
    loaded: false
  }

  async huntTheData() {
    // Check cache
    const cachedRecords = sessionStorage.getItem('releases')
    const cachedLinks = sessionStorage.getItem('links')
    if (cachedRecords) {
      this.setState({
        releases: JSON.parse(cachedRecords),
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
      links: data.links
    })
  }

  setTheData = (data) => {
    sessionStorage.setItem('releases', JSON.stringify(data.releases));
    sessionStorage.setItem('links', JSON.stringify(data.links));

    this.setState({
      releases: data.releases,
      links: data.links,
      loaded: true
    })
  }

  componentDidMount() {
    this.huntTheData()
  }

  render() {
    const {releases, links, loaded} = this.state

    return (
      <div>
        <QTZLCTL hide={loaded} />

        <Route exact path='/' render={({ match }) => (
          <Home releases={releases} links={links} match={match} />
        )} />

        <Route exact path='/releases/:id' render={({ match }) => {
          const { id } = match.params
          const release = this.state.releases.find(r => r.fields.Release === id)
          return <ReleaseItem release={release} id={id} />
        }} />
      </div>
    )
  }
}
//

export default Qtzl
