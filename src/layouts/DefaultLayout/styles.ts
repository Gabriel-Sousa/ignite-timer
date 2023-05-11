import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  margin: 5rem auto;
  padding: 2.5rem;

  @media (min-width: 1080px) {
    height: calc(100vh - 10rem);
  }

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
