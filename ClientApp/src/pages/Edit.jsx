import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { authHeader, getUser, updateUserAuth } from '../auth'

export function Edit() {
  const history = useHistory()
  const user = getUser()

  const [error, setError] = useState()

  const [updatedUser, setUpdatedUser] = useState({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    password: '',
  })

  function handleFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const newUpdatedUser = { ...updatedUser, [fieldName]: value }

    setUpdatedUser(newUpdatedUser)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Users/${user.id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(updatedUser),
    })

    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      setError(Object.values(apiResponse.errors).join(' '))
    } else {
      updateUserAuth(apiResponse)
      window.location.assign('/')
    }
  }


  return (
    <main>
      
      <header className="home">
     <Link to="/">
        <div> Home </div>
        </Link>
      </header>
        <h2 className="title1">Edit Profile</h2>
     
      <div className="eventFormDiv">
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <p className="eventSignOn">
          <label htmlFor="fullName">Name</label>
          <input
            type="text"
            name="fullName"
            value={updatedUser.fullName}
            onChange={handleFieldChange}
          />
        </p>
        <p className="eventSignOn">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            value={updatedUser.email}
            onChange={handleFieldChange}
          />
        </p>
        <p className="eventSignOn">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={updatedUser.password}
            onChange={handleFieldChange}
          />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
      </div>
    </main>
  )
}