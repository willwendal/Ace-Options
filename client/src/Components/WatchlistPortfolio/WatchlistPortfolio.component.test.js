import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WatchlistOption from './WatchlistPortfolio.component.jsx'

describe('WatchlistPortfolio', () => {
  test('renders no items when user watchlist is empty', () => {
    const { getByText } = render(<WatchlistOption ItemLength={1} />)
    expect(getByText.firstChild).toBeEmpty()
  })

  test('renders the items of the user watchlist', () => {
    const result = render(<WatchlistOption id="the=description" />)
    expect(screen.getByText(result)).toBeInTheDocument()
  })
})
