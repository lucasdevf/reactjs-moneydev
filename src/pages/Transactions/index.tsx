import { SmileySad } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { ButtonDeleteTransaction } from './components/ButtonDeleteTransaction'
import { SearchForm } from './components/SearchForm'
import {
  NoTransactions,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        {transactions.length === 0 ? (
          <NoTransactions>
            <SmileySad size={40} />
            <p>Você ainda não tem nenhuma transação cadastrada</p>
          </NoTransactions>
        ) : (
          <TransactionsTable>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.value)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td>
                    <ButtonDeleteTransaction transaction={transaction} />
                  </td>
                </tr>
              ))}
            </tbody>
          </TransactionsTable>
        )}
      </TransactionsContainer>
    </div>
  )
}
