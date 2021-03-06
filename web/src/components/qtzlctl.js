import React, { Component } from 'react'
import { cx, css, keyframes } from 'emotion'
import qtzlLogo from'../assets/logo.svg'

const fadeOut = keyframes`
  from  {
    opacity: 1;
    filter: blur(0px);
  }
  to  {
    opacity: 0;
    filter: blur(10px);
  }
`

const overlay = css`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  top: 0; bottom: 0; left: 0; right: 0;
  z-index: 9999;
`

const qtzl = css`
  z-index: 999;
  border: .618em solid transparent;
  background: white url(${qtzlLogo}) center center no-repeat;
  background-size: 280px;
  transition: visibility 0s 2s, opacity 2s linear;
  filter: invert(1);
  z-index: 9999;
`

const hiddenAnim = `${fadeOut} linear 2s 1s forwards`


export default class QTZLCTL extends Component {
  state = {
    destroy: false,
    done: false
  }

  render() {
    const {done} = this.state
    const hide = this.props.hide ? {animation: hiddenAnim} : null

    if(done) return null
    return(
      <div style={hide}>
        <div className={overlay} id="target">
          <div className={cx(overlay, qtzl)} id="aniRoot"></div>
        </div>
      </div>
    )
  }

  componentWillMount = () => this.timeouts = null
  componentDidMount = () => this.performsAndDisappears()
  componentWillUnmount = () => clearTimeout(this.timeouts)

  performsAndDisappears = () => {
    if(!this.state.destroy) return;

    const element  = document.getElementById('aniRoot');
    const target   = document.getElementById('target');

    element.addEventListener('animationend', () => {
      element.style =
        'visibility: "hidden"; opacity: 0;';
      this.timeouts = setTimeout(() => {
        target.remove();
      }, 2000); // Sync with fadeOut
    })
  }
}
