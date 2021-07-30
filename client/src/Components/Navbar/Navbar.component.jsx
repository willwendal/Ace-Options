import React from 'react'
import Email from '../Email/Email.component';
import Balance from '../Balance/Balance.component';


export default function Navbar( { userState, authentication, setAuthentication } ) {


  return (
    <div className="Navbar">

      <h3 id="app-name">ACE OPTIONS</h3>

      {authentication ?

        <div className="user-info">
          
          <Email 
            userState={userState}
          />
          
          <Balance 
            userState={userState}
          />

          <button 
            id="logout-button"
            onClick={() => setAuthentication(false)}
          >
            Log Out
          </button>

        </div>
      : 
        null
      }

    </div>
  )
}
