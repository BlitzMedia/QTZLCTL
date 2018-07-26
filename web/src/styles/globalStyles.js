import { injectGlobal } from 'emotion'
import './reset-styles'

injectGlobal(`
  * { box-sizing: border-box; }

  body {
    font-family: 'europa',sans-serif;
    letter-spacing: 0.04em;
    font-size: 13px;
  }

  a, a:visited {
    text-decoration: none;
    color: black;
    transition: opacity .15s ease;
    &:hover { opacity: .8; }
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6 { margin: 0; }
`)
