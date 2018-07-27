import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { QTZLBody, Logo, ReleaseBody, ReleaseName, QTZLHeader, Player, InfoStyle } from '../styles/styled'
import ReactPlayer from 'react-player'
import CoverImage from './Backgrounder'
import CloseButton from './CloseButton'
//import PlaylistSoundPlayer from './soundcloud'

// import { css } from 'emotion'
// import styled from 'react-emotion'

class Release extends Component {

  render() {
    if(!this.props.release) return null
    const Release = this.props.id
    const Artist = this.props.release.fields['Artist Name'] || ''
    const { Name, Info, SoundCloud, Video } = this.props.release.fields || ''

    const Backgrounds = this.props.release.fields.Background,
          Lo          = Backgrounds.find(bg => bg.filename.includes('1500')).url,
          Hi          = Backgrounds.find(bg => bg.filename.includes('2500')).url,
          Thumb       = Backgrounds[0].thumbnails.small.url || '';

    return (
      <QTZLBody className={ReleaseBody}>
        <CoverImage
          hi={Hi}
          lo={Lo}
          thumb={Thumb}
        />

        <QTZLHeader style={{display: 'block'}}>
          <Logo>{Release}</Logo>
          <ReleaseName>{Artist} - {Name}</ReleaseName>

          <CloseButton></CloseButton>
        </QTZLHeader>

        <div className={InfoStyle}>
          <ReactMarkdown source={Info}/>
        </div>

        <ReactPlayer className={Player} url={Video} playing/> <br/>
        <ReactPlayer className={Player} url={SoundCloud} playing />
      </QTZLBody>
    )
  }
}

export default Release
