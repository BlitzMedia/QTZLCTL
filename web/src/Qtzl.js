import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import { css } from 'emotion'
import { Logo, QTZLBody, QTZLHeader, SocialList, SuperFooter } from './styles/styled'
import './styles/globalStyles'
import QTZLCTL from './components/qtzlctl'
import ReleaseList from './components/releaseList'

const inverseDragon  = css`
  transform: scaleX(-1);
  display: inline-block;
`

class Qtzl extends Component {
  state = {
    links: [],
    releases: null
  }

  async huntTheData() {
    // Check cache
    const cachedRecords = sessionStorage.getItem('releases')
    const cachedLinks = sessionStorage.getItem('links')
    if (cachedRecords) {
      this.setState({
        releases: JSON.parse(cachedRecords),
        links: JSON.parse(cachedLinks)
      })
      console.log('Cached!')
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

    this.setState(data)
  }

  componentDidMount() {
    this.huntTheData()
  }

  render() {
    const {releases, links} = this.state

    return (
      <QTZLBody>
        <QTZLCTL />

        <QTZLHeader>
          <Logo>QTZLCTL</Logo>
        </QTZLHeader>

        <ReleaseList releases={releases}/>

        <SocialList>
          {links.map((link, i) => (
            <SocialIcon key={i}
              url={link.fields.URL}
              style={{ height: 25, width: 25 }}
              color="black"
              network={link.fields.Name.toLowerCase()} />
          ))}
        </SocialList>

        <SuperFooter>
          <small><span className={inverseDragon}>🐉</span> © QTZLCTL 2018 All Rights Reserved 🐉</small>
          <br/>
          <small>Designed by <a href="https://blitz.media" target="_blank">Blitz!</a>⚡️</small>
        </SuperFooter>
      </QTZLBody>
    )
  }
}
//

export default Qtzl;
