import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 45rem;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    max-width: 23rem;
    padding: 1rem;
  }
`
