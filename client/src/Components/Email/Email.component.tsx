import './Email.css'
import React from 'react'
import UserState from '../../types/UserState'

export default function Email(userState: UserState) {
  console.log(userState)
  return (
    <div className="Email">
      User:
      <div id="email-box" data-testid="test-email-box">
        {userState.email}
      </div>
    </div>
  )
}
