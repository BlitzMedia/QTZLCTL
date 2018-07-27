import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { QTZLBody, Logo, PostLogo, QTZLHeader, SocialList, SuperFooter, ListItem } from '../styles/styled'
import { SocialIcon } from 'react-social-icons'
import { css } from 'emotion'
import '../styles/globalStyles'

const inverseDragon  = css`
  transform: scaleX(-1);
  display: inline-block;
`

class Home extends Component {

  componentWillMount() {
    console.log(`
Welcome to 🐉 QTZLCTL 🐉
This website is built by Gorka Molero with some help from his friends
Made with React, Express & Emotion
-> https://gorka.space
-> https://blitz.media
    `)
  }

  render() {
    const {content, links} = this.props

    return(
      <QTZLBody>
        <QTZLHeader>
          <div>
            <Logo>QTZLCTL</Logo>
            <PostLogo>A Transatlantic Musical Collective</PostLogo>
          </div>

          <nav>
            <NavLink strict to='/artists'>Artists</NavLink>
            <span className="navSeparator"> / </span>
            <NavLink strict to='/'>Releases</NavLink>
          </nav>
        </QTZLHeader>

        <section className="content">
          {content.map((item, i) => <NavLink key={i} to={item.url} className={ListItem}>{item.name}</NavLink>)}
        </section>

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
