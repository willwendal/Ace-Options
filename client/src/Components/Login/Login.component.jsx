

export default function Login({ emailState, setEmailState, passwordState, setPasswordState, login }) {

  
  const submitHandler = (e) => {
    e.preventDefault();
    login(emailState, passwordState)
  }

  return (
    <div className="Login">
      
      <form id="login-form" onSubmit={submitHandler}>

        <input 
          className="email-input"
          type="text"
          placeholder="Email"
          value={emailState}
          onChange={(e) => {
            setEmailState(e.target.value)
          }}
        />

        <input
          className="password-input"
          type="password"
          placeholder="Password"
          value={passwordState}
          onChange={(e) => {
            setPasswordState(e.target.value)
          }}
        />

        <button type="submit">
          Log In
        </button>
         
      </form>


    </div>
  )
}
