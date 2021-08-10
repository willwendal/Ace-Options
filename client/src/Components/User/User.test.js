import User from './User.component'
import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('User Component', () => {
  it('should render the correct information on screen', () => {
    const userState = {
      firstName: 'Maria',
      lastName: 'Pallares',
      email: 'hello@gmail.com',
      password: 'hello',
    }

    const setUserState = jest.fn()
    const optionToPortfolio = jest
    const deleteFromWatchlist = jest.fn()
    const deleteFromPortfolio = jest.fn()
    const selectedView = false
    const setSelectedView = jest.fn()
    render(
      <User
        userState={userState}
        setUserState={setUserState}
        optionToPortfolio={optionToPortfolio}
        deleteFromWatchlist={deleteFromWatchlist}
        deleteFromPortfolio={deleteFromPortfolio}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />,
    )

    const element = screen.getByTestId('user')
    expect(element).toBeInTheDocument()
  })
  it ('on click should be called with the right functions and right arguments', () => {
    const userState = {
      firstName: 'Maria',
      lastName: 'Pallares',
      email: 'hello@gmail.com',
      password: 'hello',
    }

    const setUserState = jest.fn()
    const optionToPortfolio = jest
    const deleteFromWatchlist = jest.fn()
    const deleteFromPortfolio = jest.fn()
    const selectedView = false
    const setSelectedView = jest.fn()

    render(
      <User
      userState={userState}
      setUserState={setUserState}
      optionToPortfolio={optionToPortfolio}
      deleteFromWatchlist={deleteFromWatchlist}
      deleteFromPortfolio={deleteFromPortfolio}
      selectedView={selectedView}
      setSelectedView={setSelectedView}
      />,
    )

    const btnWatchList = screen.getByTestId('watchListBtn')
    await userEvent.click(btnWatchList)

    expect(setSelectedView).toHaveBeenCalledWith(false)

    const btnPortfolio = screen.getByTestId('portfolioBtn')

    await userEvent.click(btnPortfolio)

    expect(setSelectedView).toHaveBeenCalledWith(true)
  })
})
