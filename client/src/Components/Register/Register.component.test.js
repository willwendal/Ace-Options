import React from 'react'
import Register from './Register.component.jsx'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom/extend-expect'

describe('Register Form', () => {
  it('should render the basic fields', () => {
    render(<Register />)
    expect(screen.getByPlaceholderText(/First Name/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Last Name/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Email/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Password/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Create Account/ })).toBeInTheDocument()
  })


  it('should call onSubmit with the provided info', async () => {
    const register = jest.fn()

    render(<Register register={register} />)

    const firstName = screen.getByPlaceholderText(/First Name/)
    const lastName = screen.getByPlaceholderText(/Last Name/)
    const email = screen.getByPlaceholderText(/Email/)
    const password = screen.getByPlaceholderText(/Password/)

    const submitBtn = screen.getByRole('button', { name: /Create Account!/i })

    userEvent.type(firstName, 'John')
    userEvent.type(lastName, 'Doe')
    userEvent.type(email, 'johndoe@xxx.com')
    userEvent.type(password, 'xxx')
    userEvent.click(submitBtn)

    expect(register).toHaveBeenCalledWith('John', 'Doe', 'johndoe@xxx.com', 'xxx')
  })
})
