import React, { useState } from 'react'
import { recordAuthentication } from '../auth'


export function SignOn() {
  const [error, setError] = useState()

const [user, setUser] = useState({
  email: '',
  password: '',
})
function handleChange(event) {
  const value = event.target.value
  const fieldName = event.target.name

  const updatedUser = { ...user, [fieldName]: value }

  setUser(updatedUser)
}
async function handleSubmit(event) {
  event.preventDefault()

  const response = await fetch('/api/Sessions', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  })

  const apiResponse = await response.json()

  if (apiResponse.status === 400) {
    setError(Object.values(apiResponse.errors).join(' '))
  } else {
    // TODO, record the login
    recordAuthentication(apiResponse)
    window.location.assign('/')
  }
}
  return (
    <>
     <header>
        <ul className="header">
          <li>Welcome,</li>
        </ul>
      </header>
    <main> 
          <h1>Sign In!!!</h1>
          <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
          <p className="form-input">
            <label htmlFor="name">Email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} />
          </p>
          <p className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} />
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
  
    