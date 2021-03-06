import styled from 'react-emotion'
import { css } from 'emotion'

const measure = 1;

export const QTZLBody = styled('main')`
  background: white;
  border: ${measure}em solid black;
  padding: ${measure}em;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  & > * { width: 100%; }
`

export const Logo = styled('h1')`
  font-size: 1.6em;
  letter-spacing: 1em;
  text-transform: uppercase;

  @media (max-width: 640px) {
    letter-spacing: .5em;
  }
`

export const PostLogo = styled('h2')`
  font-size: 0.6em;
  letter-spacing: 0.34em;
  margin-top: 8px;
  text-transform: uppercase;
  font-family: 'Dosis';
  @media (max-width: 640px) {
    font-size: .8em;
  }
`

export const ReleaseName = styled('h2')`
  font-size: 1.4em;
  letter-spacing: 0.21em;
  text-transform: uppercase;
  font-weight: normal;
`

export const QTZLHeader = styled('header')`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  nav {
    &:hover * { opacity: .5; }
    a {
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.2em;
      font-size: 0.8em;
      padding: ${measure/2}em;
      transition: opacity .15s ease;
      &:hover { opacity: 1; }
    }
  }

  nav
`

export const SubHeader = styled('h2')`
  font-size: 1.4em;
  letter-spacing: ${measure/2}em;
  text-transform: uppercase;
`

export const SubSection = styled('section')`

`

export const ListItem = css`
  padding: .9em 0;
  cursor: pointer;

  display: flex;
  align-items center;
  justify-content: flex-start;

  width: 100%;

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
  display: flex;
  align-items: center;

  & > * { margin: ${measure/4}em; }
`

export const SuperFooter = styled('footer')`
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAACKklEQVQ4EWNgIAH4GDCIXahj8MOlhQkoQRCHWTJI/J7DeDDJhkEEh3qwITBLYAaC+CA2GIRbMYj93sZz8Ww7XyNQAC6OxsbrGoZwSwaxn1vkLv88avnS01RQAKoZZiEyDbYUKwHyzvdNwhf/vWj/v7pFtwSrIjRBdOcyeViwS3zdyH/x39eV/7+esn9soivDg6YHg4vsPDDb3ZJD4ssqvsv/38/+//99x/8VPVIZQF0Y6pDFGKHGghT9A7F9bVkllqYy7+RxadRjEHdlYLjjxfDt6etrvz4w/GL485+B8SdQ0Segtn+Mj8pW/Y+fffjvB5A+GAAZxBBizyDxeQ7TxX83Y/7/+3fo/7+/e/7/+zn9/78fM4F41f//Pzb+/3/G4f+XWYI3UxxZlWCaQTTIRWBDPMwZuNYXM6xle8egw8DCxMTA/5+BgR2shIWRiUOEwWEZA+PjLQzvTm4+EzLxu+/+859egWQxACsLAxMPJwMLGHMAaSAW5mNmOdwuWPXvXtX/f9cy/j+bJ7bXTIMblASIAmAXglSm+4jr/T7o9v3/tcz/dyaLrdZV5uDCZwJIIwaWlxTjeLtM4/S/C5H/TzTLzpQTY2fDpg5JDLsdexvkav4dtvh/rJavVYSPGe5K7KqxizJV+PPr/d0o/nVfCXsBLwfxhqB4S0eajePjDL6ja3I4YzhYMb2M5BUUfRhuOl4hULA4ickHQ4IUgQofDrFJEexmpOiBqQUAmROuoDB3XTYAAAAASUVORK5CYII=), auto;

  width: 100vh;
  text-align: left;
  position: fixed;
  right: 2em;
  top: -6em;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  opacity: 0.1;
  transition: opacity .15s ease;

  &:hover { opacity: .75 }
`

export const ReleaseBody = css`
  justify-content: flex-start;
  background: rgba(255, 255, 255, .7);
`

export const InfoStyle = css`
  padding: ${measure}em 0;
  text-transform: lowercase;
  max-width: 360px !important;
  font-family: 'Dosis';
  font-weight: 400;
`

export const Player = css`
  max-width: 100%;
  @media (max-width: 640px) { width: 100% !important; }
  @media (min-width: 768px) {
    opacity: .5;
    transition: opacity .25s ease;
    &:hover { opacity: 1 }
  }
`

export const Reverse = css`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
`
