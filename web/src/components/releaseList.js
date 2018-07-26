import React, { Component } from 'react'
import { css } from 'emotion'
import { SubHeader, SubSection, ReleaseItem } from '../styles/styled'
import { NavLink } from 'react-router-dom'

const reverse = css`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`


const Release = props => (
  <ReleaseItem>
      #{props.releaseNumber} | {props.artist} - {props.title}
  </ReleaseItem>
)

export default class ReleaseList extends Component {

  render() {
    const {releases} = this.props

    // Just in case
    if(!this.props.releases) return (<SubHeader>No Releases</SubHeader>)

    return(
      <SubSection className={reverse}>
        {releases.map(release => {
          const URL = `/releases/${release.fields['Release']}`
          return (
            <NavLink to={URL} key={release.id}>
              <Release
                title={release.fields.Name}
                artist={release.fields['Artist Name']}
                releaseNumber={release.fields['Release']} />
            </NavLink>
          )
        })}
      </SubSection>
    )
  }
}
