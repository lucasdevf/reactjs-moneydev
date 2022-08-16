import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border-radius: 6px;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${(props) => props.theme['red-300']};

  &:hover {
    svg {
      color: ${(props) => props.theme['red-300']};
    }
  }

  svg {
    color: ${(props) => props.theme['gray-400']};
  }
`

export const Content = styled.div`
  font-size: 0.8rem;
  background-color: ${(props) => props.theme['gray-900']};
  padding: 0.5rem 1rem;
  border-radius: 6px;
`
