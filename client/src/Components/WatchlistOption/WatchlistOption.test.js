import WatchlistOption from './WatchlistOption.component'
import React from 'react'
import ReactDOM from 'react-dom'
import toBeInTheDocument from '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe.only('Watch List Option', () => {
  test.only('should display the correct elements on screen', () => {
    const option = {
      description: '11 august PUT',
      _id: '6gdjsfksdjal',
    }
    const optionToPortfolio = jest.fn()
    const deleteFromWatchlist = jest.fn()
    render(
      <WatchlistOption
        option={option}
        optionToPortfolio={optionToPortfolio}
        deleteFromWatchlist={deleteFromWatchlist}
      />,
    )
    const element = screen.getByTestId('watchlistoption')
    expect(element).toBeInTheDocument()
  })

  it('delete and add functions should be called with the right arguments', async () => {
    const option = {
      description: '11 august PUT',
      _id: '6gdjsfksdjal',
    }
    const optionToPortfolio = jest.fn()
    const deleteFromWatchlist = jest.fn()

    render(
      <WatchlistOption
        option={option}
        optionToPortfolio={optionToPortfolio}
        deleteFromWatchlist={deleteFromWatchlist}
      />,
    )

    const btnAdd = screen.getByTestId('optiontoportfolio')
    await userEvent.click(btnAdd)

    expect(optionToPortfolio).toHaveBeenCalledWith(option)

    const btnDelete = screen.getByTestId('deletefromwatchlist')

    await userEvent.click(btnDelete)

    expect(deleteFromWatchlist).toHaveBeenCalledWith(option)
  })
})
