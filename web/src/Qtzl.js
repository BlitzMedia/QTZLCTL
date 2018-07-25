import React, { Component } from 'react'
//import {css} from 'emotion'
import styled from 'react-emotion'
import './styles/globalStyles'
import QTZLCTL from './components/qtzlctl'
import ReleaseList from './components/releaseList'
import QTZLOutThere from './components/qtzlOutThere'

const Logo = styled('h1')`
  font-size: 1.4em;
  letter-spacing: 0.5em;
`

const QTZLBody = styled('main')`
  border: 1em solid black;
  padding: 1em;
  height: 100vh;
`

class Qtzl extends Component {
  state = {
    releases: null
  }

  async huntTheData() {
    // Check cache
    const cachedRecords = localStorage.getItem('releases')
    if (cachedRecords) {
      this.setState({ releases: JSON.parse(cachedRecords) })
      console.log('Cached!')
      return
    }

    // Proceed with fetch
    const response = await fetch('/api/qtzlctl')
    console.log('Not Cached!')
    const data = await response.json()

    this.setTheData({releases: data.records})
  }

  setTheData = (data) => {
    console.log(data)
    localStorage.setItem('releases', JSON.stringify(data.releases));
    this.setState(data)
  }

  componentDidMount() {
    this.huntTheData()
  }

  render() {
    const {releases} = this.state

    return (
      <QTZLBody>
        <QTZLCTL />
        <Logo>QTZLCTL</Logo>

        <ReleaseList releases={releases}/>
        <QTZLOutThere />
      </QTZLBody>
    )
  }
}

export default Qtzl;
