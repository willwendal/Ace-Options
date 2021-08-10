import React from 'react'
import ReactDOM from 'react-dom'

import Balance from './Balance.component.jsx'
import { render, screen } from '@testing-library/react'
import toBeInTheDocument from '@testing-library/jest-dom'

import '@testing-library/jest-dom/extend-expect'

describe('Balance', () => {
  const mockedUser = {
    firstName: 'Jhon',
    lastName: 'Doe',
    balance: 1000000,
  }

  test('should render positive balance in the right format', () => {
    render(<Balance userState={mockedUser} />)
    const balanceDiv = screen.getByTestId('test-balance-box')

    expect(balanceDiv).toBeInTheDocument();
    expect(balanceDiv).toHaveTextContent('$1,000,000.00')
  })

  test('should render negative balance in the right format', () => {
    mockedUser.balance = -1000000

    render(<Balance userState={mockedUser} />)
    const balanceDiv = screen.getByTestId('test-balance-box')

    expect(balanceDiv).toBeInTheDocument();
    expect(balanceDiv).toHaveTextContent('-$1,000,000.00')
  })

  test('should render no balance in the right format', () => {
    mockedUser.balance = 0

    render(<Balance userState={mockedUser} />)
    const balanceDiv = screen.getByTestId('test-balance-box')

    expect(balanceDiv).toBeInTheDocument();
    expect(balanceDiv).toHaveTextContent('$0.00')
  })
})
