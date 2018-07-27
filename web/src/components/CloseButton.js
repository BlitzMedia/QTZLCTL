import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { css } from 'emotion'

class CloseButton extends Component {
  render() {
    if(!this.props.history) return null

    // const to =
    //            ? this.props.history.push('/')
    //            : this.props.history.goback()
    return(
      <a href="#"
         onClick={() => {
           const iMadeMyself1 = document.referrer === ""
           const iMadeMyself2 =  document.referrer.includes(window.location.pathname)
           if(iMadeMyself1 || iMadeMyself2) this.props.history.push('/')
           else this.props.history.goBack()
         }}

         className={css`
           padding: 1em;
           position: absolute;
           right: 0; top: 0;
           width: 4em; height: 4em;

           display: flex;
           align-items: center;
           justify-content: center;

           &:before {
             content: '×';
             font-size: 150%;
             font-weight: bold;
           }
         `}
      ></a>
    )
  }
}

export default withRouter(CloseButton)
