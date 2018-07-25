import React, { Component } from 'react'
import {SubHeader, SubSection} from '../styles/styled'


const Release = props => (
  <div>
      <h3>{props.title}</h3>
      <p>{props.artist}</p>
  </div>
)

export default class ReleaseList extends Component {

  render() {
    const {releases} = this.props

    // Just in case
    if(!this.props.releases) return <h3>No releases</h3>

    return(
      <SubSection>
        <SubHeader>Releases</SubHeader>

        {releases.map(release => (
          <Release
            key={release.id}
            title={release.fields.Name}
            artist={release.fields['Artist Name']}/>
        ))}
      </SubSection>
    )
  }
}
