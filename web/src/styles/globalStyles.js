import { injectGlobal } from 'emotion'
import './reset-styles'

injectGlobal(`
  * { box-sizing: border-box; }

  body {
    font-family: 'europa',sans-serif;
    letter-spacing: 0.04em;
  }
`)
