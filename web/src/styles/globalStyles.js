import { injectGlobal } from 'emotion'
import './reset-styles'

injectGlobal(`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'League Spartan';
    src: url('/fonts/leaguespartan-bold.eot');
    src: url('/fonts/leaguespartan-bold.eot?#iefix') format('embedded-opentype'),
         url('/fonts/leaguespartan-bold.woff2') format('woff2'),
         url('/fonts/leaguespartan-bold.woff') format('woff'),
         url('/fonts/leaguespartan-bold.ttf') format('truetype'),
         url('/fonts/leaguespartan-bold.svg#league_spartanbold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  body {
    font-family: 'League Spartan';
  }
`)
