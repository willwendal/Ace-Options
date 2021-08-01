import React from 'react'
import Email from '../Email/Email.component';
import Balance from '../Balance/Balance.component';
import './Navbar.css'



export default function Navbar( { userState, authentication, setAuthentication } ) {


  return (
    <div className="Navbar">

      <div id="logo">
        <img src="users/andres/Desktop/Codeworks/Week7/solo-andres/client/images/app_logo.png" alt="LOGO"></img>
      </div>

      <div id="app-name">
        <h1>ace options</h1>
        {/* <img src="" alt="logo text"></img> */}
      </div>
      

      {authentication ?

        <div className="user-info">

          
    
          <div id="email-navbar">
            <Email 
              id="email-render"
              userState={userState}
            />
          </div>

          <div id="balance">
            <Balance 
              userState={userState}
            />
          </div>

          <div id="div-logout-button">
            <button 
              id="logout-button"
              onClick={() => setAuthentication(false)}
            >
              Log Out
            </button>
          </div>


        </div>
      : 
      <div id="not-auth-text">

        <div id="home-button">
          <h6>Home</h6>
        </div>

        <div id="login-button">
          <h6>Log In</h6>
        </div>

        <div id="register-button">
          <h6>Register</h6>
        </div>

      </div>
      }

    </div>
  )
}
