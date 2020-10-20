import React from 'react'


export function SignOn() {
  return (
    <>
     <header>
        <ul className="header">
          <li>Welcome,</li>
        </ul>
      </header>
    <main>
          <h1>Sign In!!!</h1>
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
      {/* need to make footer for page */}
        <footer>

        </footer>
      </main>
      
    </>
  )
}
  
    