import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.5s ease;

  @media (min-width: 768px) and (max-width: 1024px) {
    align-items: unset;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;

    @media (min-width: 320px) and (max-width: 767px) {
      gap: 2rem;
    }
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['gray-100']};

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 1rem;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['yellow-700']};
  color: ${(props) => props.theme.white};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-900']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
