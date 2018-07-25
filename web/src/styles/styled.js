import styled from 'react-emotion'
import { css } from 'emotion'

const measure = 1;

export const Logo = styled('h1')`
  font-size: 1.4em;
  letter-spacing: 0.5em;
`

export const QTZLBody = styled('main')`
  border: ${measure}em solid black;
  padding: ${measure}em;
  height: 100vh;
  overflow-y: scroll;
`

export const SubHeader = styled('h2')`
  font-size: 1.4em;
  letter-spacing: ${measure/2}em;
  text-transform: uppercase;
`

export const SubSection = styled('section')`
  margin-top: ${measure}em;
`

export const ReleaseItem = styled('a')`
  padding: ${measure}em 0;
  cursor: pointer;

  display: flex;
  align-items center;
  justify-content: flex-start;

  & > * + * { margin-left: .618em; }

  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background: black;
    width: 0%;
    transition: width .25s cubic-bezier(.36,.4,.37,.81);
  }
  &:hover:after { width: 100%; }
`

export const SocialList = styled('aside')`
  position: absolute;
  top: ${measure*2}em; right: ${measure*2}em;
  padding: ${measure/2}em
  display: flex;
  align-items: center;

  & > * { margin: ${measure/4}em; }
`