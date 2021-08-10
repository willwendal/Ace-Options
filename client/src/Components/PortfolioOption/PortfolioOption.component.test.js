import PortfolioOption from './PortfolioOption.component'
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
    const deleteFromPortfolio = jest.fn();

    render(<PortfolioOption option={mockedOption} deleteFromPortfolio={deleteFromPortfolio} />)
    
    const descriptionField = screen.getByTestId('test-description');
    expect(descriptionField.textContent).toBe('desc');

    const typeField = screen.getByTestId('test-type');
    expect(typeField.textContent).toBe('type');

    const bidField = screen.getByTestId('test-bid');
    expect(bidField.textContent).toBe('2');

    const askField = screen.getByTestId('test-ask');
    expect(askField.textContent).toBe('5');

    const buyPriceField = screen.getByTestId('test-buy-price');
    expect(buyPriceField.textContent).toBe('5.00');

    const strikeField = screen.getByTestId('test-strike');
    expect(strikeField.textContent).toBe('10');

    const expDateField = screen.getByTestId('test-exp-date');
    expect(expDateField.textContent).toBe('date');
  })

  it('Should properly call deleteFromPortfolio when the button is clicked', () => {
    const deleteFromPortfolio = jest.fn();

    render(<PortfolioOption option={mockedOption} deleteFromPortfolio={deleteFromPortfolio} />)
    const deleteBtn = screen.getByRole('button', { name: /✌️/i });

    userEvent.click(deleteBtn);

    expect(deleteFromPortfolio).toHaveBeenCalledWith(mockedOption);
  })


})