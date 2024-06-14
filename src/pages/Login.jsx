import React from 'react'

const login = () => {
  return (
    <>
    <div className="sign-up-body">

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

      <div className="yellow-box">
        box-talk <br />
        Login 
      </div>

    </div>
  </>
  )
}

export default login