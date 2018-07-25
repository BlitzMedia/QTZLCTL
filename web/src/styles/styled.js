import styled from 'react-emotion'

export const SubHeader = styled('h2')`
  font-size: 1.4em;
  letter-spacing: 0.5em;
  text-transform: uppercase;
`

export const SubSection = styled('section')`
  margin-top: 1em;
`

export const ReleaseItem = styled('article')`
  display: flex;
  align-items center;
  justify-content: flex-start;

  & > * + * { margin-left: .618em; }
`
