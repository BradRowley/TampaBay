import React from 'react'

export function SignUp() {
  return (
    <>
     <header>
        <ul className="header">
          <li>Welcome,</li>
        </ul>
      </header>
         <main>
          <h1>Sign Up!!!</h1>
        <form action="#">
          <p className="form-input">
            <label htmlFor="name">Email</label>
            <input type="email" name="email" />
          </p>
          <p className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </main>
      
    </>
  )
}