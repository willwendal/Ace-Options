import { useState } from 'react'
import Login from '../Login/Login.component';
import Register from '../Register/Register.component';
import './Welcome.css';
import appLogo from '../../images/app_logo.png';
import homeBackground from '../../images/home_background.png';
import homeFooterLeft from '../../images/footer_left.png';
import homeFooterRight from '../../images/footer_right.png';

export default function Welcome({ login, register }) {

  const [selectedButton, setSelectedButton] = useState(true);
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [firstNameState, setFirstNameState] = useState('');
  const [lastNameState, setLastNameState] = useState('');

  return (
    <div className="Welcome">

      <div 
        id="static-info"
        style={{backgroundImage: `url(${homeBackground})`}}
      >

        <div id="welcome-message">
          <h2>welcome to ace options</h2>
          <img src={appLogo} alt="logo goes here"></img>
        </div>

        <div id="slogan">
          <p>options trading made simple</p>
        </div>

        <div id="snapshot">
          <img alt="...A SNAPSHOT OF THE APP GOES HERE"></img>
        </div>

      </div>
      

      <div id="unstatic-info">
        
        <button 
          id="buttons-register-login"
          onClick={ () => setSelectedButton(true) }
        >Log In</button>

        <button 
          id="buttons-register-login"
          onClick={ () => setSelectedButton(false) }
        >Register</button>

        

        {selectedButton ? 
          <Login 
            emailState={emailState}
            setEmailState={setEmailState}
            passwordState={passwordState}
            setPasswordState={setPasswordState}
            login={login}
          />
        :
          <Register 
            firstNameState={firstNameState}
            setFirstNameState={setFirstNameState}
            lastNameState={lastNameState}
            setLastNameState={setLastNameState}
            emailState={emailState}
            setEmailState={setEmailState}
            passwordState={passwordState}
            setPasswordState={setPasswordState}
            register={register}
          />
        }

      </div>

      <div id="footer">
        <img src={homeFooterRight} id="footer-right"></img>
        <img src={homeFooterLeft} id="footer-left"></img>
      </div>
      
    </div>
  )
}
