import { injectGlobal } from 'emotion'
import './reset-styles'

injectGlobal(`
  * { box-sizing: border-box; }

  body {
    font-family: 'europa',sans-serif;
    letter-spacing: 0.04em;
  }

  a, a:visited {
    text-decoration: none;
    color: black;
    transition: opacity .15s ease;
    &:hover { opacity: .8; }
  }

  h1, h2, h3, h4, h5, h6 { margin: 0; }
`)
