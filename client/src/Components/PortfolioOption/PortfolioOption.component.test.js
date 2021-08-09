import PortfolioOption from './Login.component'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockedOption = {
  symbol: 'symbol',
  description: 'description',
  option_type: 'type',
  bid: 2,
  ask: 5,
  strike: 10,
  contract_size: 15,
  expiration_date: 'date'

}

describe('Portfolio Option', () => {
  it('Should display the correct informations', () => {
    const { getByTestId } = render(<PortfolioOption option={mockedOption} deleteFromPortfolio={deleteFromPortfolio} />)
    
    const descriptionField = getByTestId('test-description');
    expect(descriptionField).toHaveTextContent('desc');

    const typeField = getByTestId('test-type');
    expect(typeField).toHaveTextContent('type');

    const bidField = getByTestId('test-bid');
    expect(bidField).toHaveTextContent('2');

    const askField = getByTestId('test-ask');
    expect(askField).toHaveTextContent('5');

    const buyPriceField = getByTestId('test-buy-price');
    expect(buyPriceField).toHaveTextContent('5.00');

    const strikeField = getByTestId('test-strike');
    expect(strikeField).toHaveTextContent('10');

    const expDateField = getByTestId('test-exp-date');
    expect(expDateField).toHaveTextContent('date');
  })

  it('Should properly call deleteFromPortfolio when the button is clicked', () => {
    const deleteFromPortfolio = jest.fn();

    render(<PortfolioOption option={mockedOption} deleteFromPortfolio={deleteFromPortfolio} />)
    const deleteBtn = screen.getByRole('button', { name: /✌️/i });

    userEvent.click(deleteBtn);

    expect(deleteFromPortfolio).toHaveBeenClickedWith(mockedOption);
  })


})