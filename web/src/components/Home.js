import React, { Component } from 'react'
import { css } from 'emotion'
import { QTZLBody, Logo, QTZLHeader, SocialList, SuperFooter } from '../styles/styled'
import { SocialIcon } from 'react-social-icons'
import ReleaseList from './releaseList'
import '../styles/globalStyles'

const inverseDragon  = css`
  transform: scaleX(-1);
  display: inline-block;
`

class Home extends Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const {links, releases} = this.props
    return(
      <QTZLBody>
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

export default Home
