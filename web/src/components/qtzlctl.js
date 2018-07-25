import React, { Component } from 'react'
import { cx, css, keyframes } from 'emotion'
import qtzlLogo from'../assets/logo.svg'

const fadeOut = keyframes`
  from  {
    opacity: 1;
    z-index: 999;
  }
  to  {
    opacity: 0;
    z-index: -1;
  }
`

const overlay = css`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0; bottom: 0; left: 0; right: 0;
`

const qtzl = css`
  animation: ${fadeOut} linear 2s 1s forwards;
  z-index: 999;
  border: .618em solid transparent;
  background: white url(${qtzlLogo}) center center no-repeat;
  background-size: 280px;
`


export default class QTZLCTL extends Component {
  state = { destroy: true }

  componentWillMount = () => this.timeouts = null
  componentDidMount = () => this.performAndDisappear()
  componentWillUnmount = () => clearTimeout(this.timeouts)

  performAndDisappear = () => {
    if(!this.state.destroy) return;

    const element  = document.getElementById('aniRoot');
    const target   = document.getElementById('target');

    element.addEventListener('animationend', () => {
      element.style =
        'visibility: \'hidden\'; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;';
      this.timeouts = setTimeout(() => {
        target.remove();
      }, 2000); // Sync with fadeOut
    })
  }

  render() {
    return(
      <div className={overlay} id="target">
        <div className={cx(overlay, qtzl)} id="aniRoot">
        </div>
      </div>
    )
  }
}
