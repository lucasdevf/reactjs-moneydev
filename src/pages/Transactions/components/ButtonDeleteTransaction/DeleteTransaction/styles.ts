import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    color: ${(props) => props.theme['gray-300']};
    text-align: center;
  }
`

export const WrapperButtons = styled.footer`
  display: flex;
  gap: 1rem;

  button {
    width: 8.62rem;
    border: 0;
    cursor: pointer;
    border-radius: 8px;
    padding: 1rem;
    font-weight: 600;
  }

  button.cancel {
    color: ${(props) => props.theme['gray-100']};
    background: transparent;
  }

  button.confirm {
    color: ${(props) => props.theme['red-300']};
    background: ${(props) => props.theme['gray-700']};
  }
`
