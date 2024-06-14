import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className="sign-up-body">
        <div className="yellow-box">
          box-talk <br />
          Sign up 
        </div>

        <div className="sign-up-form-container">
          
          <div className="input-wrapper">
            <label htmlFor="username">Yousername</label>
            <input 
              id='username'
              type="text" 
              placeholder="Username" 
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              id='password'
              type="password" 
              placeholder="Username" 
            />
          </div>

          <div className="button">
            Continue
          </div>
        </div>

      </div>
    </>
  )
}

export default SignUp