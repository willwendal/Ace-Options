import React from 'react';

import Balance from './Balance.component.jsx';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';


test("It should render the balance in the right format", () => {

  const mockedUser = {
    firstName: 'Jhon',
    lastName: 'Doe',
    balance: 1000000
  }

  const { getByTestId } = render(<Balance userState={mockedUser}/>);
  const balanceDiv = getByTestId('test-balance-box');

  expect(balanceDiv.textContent).toBe('$1,000,000.00');
})

