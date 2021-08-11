import Email from './Email.component.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import toBeInTheDocument from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom/extend-expect';

it('should render the email of the user', () => {

  const mockedUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@xxx.com'
  }

  render(<Email userState={mockedUser}/>);
  const emailDiv = screen.getByTestId('test-email-box');

  expect(emailDiv).toBeInTheDocument();
  expect(emailDiv).toHaveTextContent('johndoe@xxx.com');
})