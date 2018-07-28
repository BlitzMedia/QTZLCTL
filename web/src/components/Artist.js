import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Gallery from 'react-grid-gallery'
import { QTZLBody, QTZLHeader, Logo, ReleaseBody, ListItem, SubHeader, InfoStyle } from '../styles/styled'
import CloseButton from './CloseButton'
import Helmet from 'react-helmet';

class Artist extends Component {
  state = {
    lightboxIsOpen : false
  }

  goBack = () => { this.props.history.goBack() }
  closeLightbox = () => { console.log('Closin') }

  render() {
    if(!this.props.artist) return null

    const { Name, BIO } = this.props.artist.fields
    const Releases = this.props.releases
    const gal = this.props.artist.fields.Gallery ?
      this.props.artist.fields.Gallery.map(img => ({
      src: img.url,
      thumbnail: img.thumbnails.large.url,
      thumbnailWidth: img.thumbnails.large.height,
      thumbnailHeight: img.thumbnails.large.width,
      rowHeight: 'auto'
    })) : []

    return (
      <QTZLBody className={ReleaseBody} style={{background: 'white'}}>

        <QTZLHeader style={{display: 'block'}}>
          <Logo>{Name}</Logo>

          <CloseButton />
        </QTZLHeader>

        <div className={InfoStyle}>
          <ReactMarkdown source={BIO}/>

          <Gallery
            images={gal}
            enableLightbox={true}
            enableImageSelection={false}/>
        </div>

        <br/>

        <section className="releases">
          <SubHeader>Releases</SubHeader>
          {Releases.map((item, i) => {
            const url = '/releases/' + item.fields.Release
            return (
              <NavLink key={i} to={url} className={ListItem}>
                #{item.fields.Release} | {item.fields['Artist Name']} - {item.fields.Name}
              </NavLink>
            )
          })}
        </section>
      </QTZLBody>
    )
  }
}

export default Artist

//<ReactMarkdown source={Info}/>
