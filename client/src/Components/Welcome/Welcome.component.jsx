import { useState } from 'react'
import Login from '../Login/Login.component';
import Register from '../Register/Register.component';

export default function Welcome({ login, register }) {

  const [selectedButton, setSelectedButton] = useState(true);
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [firstNameState, setFirstNameState] = useState('');
  const [lastNameState, setLastNameState] = useState('');

  return (
    <div className="Welcome">

      <button 
        id="login-button"
        onClick={ () => setSelectedButton(true) }
      >Log In</button>

      <button 
        id="register-button"
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
  )
}
