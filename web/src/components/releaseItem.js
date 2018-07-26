import React, { Component } from 'react'
import { QTZLBody, Logo, QTZLHeader } from '../styles/styled'

class ReleaseItem extends Component {

  componentDidMount() {
    console.log('Release!')
  }

  render() {
    if(!this.props.release) return null
    const Release = this.props.id
    const Artist = this.props.release.fields['Artist Name'] || ''
    const {ArtistName, Name} = this.props.release.fields || ''
    return (
      <QTZLBody>
        <QTZLHeader>
          <Logo>{Release}</Logo>
          <Logo>{Artist} - {Name}</Logo>
        </QTZLHeader>
      </QTZLBody>
    )
  }
}

export default ReleaseItem
//
