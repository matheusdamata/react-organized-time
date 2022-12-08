import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;

  transition: all 0.5s ease;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const CountdownContent = styled.div`
  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: row;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['yellow-700']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`
