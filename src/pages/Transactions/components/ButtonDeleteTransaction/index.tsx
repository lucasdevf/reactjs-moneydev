import * as Tooltip from '@radix-ui/react-tooltip'

import * as Dialog from '@radix-ui/react-dialog'

import { Trash } from 'phosphor-react'
import {
  Transaction,
  TransactionsContext,
} from '../../../../contexts/TransactionsContext'

import { Button, Content } from './styles'
import { DeleteTransaction } from './DeleteTransaction'
import { api } from '../../../../lib/axios'
import { useContextSelector } from 'use-context-selector'

interface ButtonDeleteTransactionProps {
  transaction: Transaction
}

export function ButtonDeleteTransaction({
  transaction,
}: ButtonDeleteTransactionProps) {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions,
  )

  async function handleDeleteTransaction() {
    await api.delete(`/transactions/${transaction.id}`)

    await fetchTransactions()
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={200}>
        <Tooltip.Trigger asChild>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button>
                <Trash size={15} />
              </Button>
            </Dialog.Trigger>

            <DeleteTransaction onDelete={handleDeleteTransaction} />
          </Dialog.Root>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content sideOffset={5}>
            <Content>
              <p>Excluir transação</p>
              <Tooltip.Arrow />
            </Content>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
