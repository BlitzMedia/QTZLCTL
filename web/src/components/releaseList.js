import React, { Component } from 'react'
//import { css } from 'emotion'
import {SubHeader} from '../styles/type'


const Release = props => (
  <div>
      <h3>{props.title}</h3>
      <p>{props.artist}</p>
  </div>
)

export default class ReleaseList extends Component {

  //const {releases} = this.props


  // const listItems = releases.map((release) =>
  //   <li key={number.toString()}
  //             value={number} />
  // );
  // const release = () => {
  //
  // }

  componentDidMount() {
    //console.log(releases)
  }

  render() {
    const {releases} = this.props
    // console.log(releases)
    // const items = releases.map((release) => <h1>Release</h1>)
    // const items = releases.map((release) =>
    //   <li key={release}></li>
    // )
    if(!this.props.releases) return <h3>No releases</h3>

    return(
      <div>
        <SubHeader>Releases</SubHeader>

        {releases.map(release => (
          <Release
            key={release.id}
            title={release.fields.Name}
            artist={release.fields.Artist}/>
        ))}
      </div>
    )
  }
}
