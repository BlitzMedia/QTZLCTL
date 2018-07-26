import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { css } from 'emotion'
import { QTZLBody, Logo, ReleaseName, QTZLHeader, CloseButton } from '../styles/styled'
import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-bg-image'

const releaseBody = css`
  justify-content: flex-start;
  background: rgba(0,0,0,.5);
  color: white;
  a, a:visited { color: white }
  border-color: white;
`

const Backgrounder = styled(ProgressiveImage)`
  width: 100%; height: 100%;
  position: absolute;
  top: 0; bottom: 0; right: 0; left: 0;
  background-position: center center;
  background-size: cover;
  z-index: -1;
`

class ReleaseItem extends Component {

  componentDidMount() {
    console.log('Release!')
  }

  render() {
    if(!this.props.release) return null
    const Release = this.props.id
    const Artist = this.props.release.fields['Artist Name'] || ''
    const {Name, Info } = this.props.release.fields || ''
    const FullBackground = this.props.release.fields.Background[0].url || ''
    const Thumb = this.props.release.fields.Background[0].thumbnails.small.url || ''
    return (
        <QTZLBody className={releaseBody}>

          <Backgrounder
            src={FullBackground}
            placeholder={Thumb}
            transition="all 1s linear"
          />

          <QTZLHeader>
            <Logo>{Release}</Logo>
            <ReleaseName>{Artist} - {Name}</ReleaseName>

            <NavLink to="/" className={CloseButton} />
          </QTZLHeader>

          <div style={{padding: '1em 0'}}>
            <ReactMarkdown source={Info} />
          </div>

          <div className={css``}></div>
        </QTZLBody>
    )
  }
}

export default ReleaseItem
//
