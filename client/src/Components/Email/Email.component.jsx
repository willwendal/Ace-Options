import './Email.css'
import React from 'react'

export default function Email({userState}) {
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
