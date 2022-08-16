import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, WrapperButtons } from './styles'

interface DeleteTransactionProps {
  onDelete: () => void
}

export function DeleteTransaction({ onDelete }: DeleteTransactionProps) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Excluir transação</Dialog.Title>

        <p>
          Você tem certeza que gostaria de <br /> excluir esta transação?
        </p>

        <WrapperButtons>
          <Dialog.Close asChild>
            <button className="cancel">Cancelar</button>
          </Dialog.Close>
          <button className="confirm" onClick={() => onDelete()}>
            Sim, excluir
          </button>
        </WrapperButtons>
      </Content>
    </Dialog.Portal>
  )
}
