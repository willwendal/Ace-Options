import Email from './Email.component.jsx';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

test('It should render the email fo the user', () => {

  const mockedUser = {
    firstName: 'Jhon',
    lastName: 'Doe',
    email: 'johndoe@xxx.com'
  }

  const { getByTestId } = render(<Email userState={mockedUser}/>);
  const emailDiv = getByTestId('test-email-box');

  expect(emailDiv).toBeInTheDocument();
  expect(emailDiv).toHaveTextContent('johndoe@xxx.com');
})