import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function SignUp() {
  const history = useHistory()
  const [error, setError] = useState()

const [newUser, setNewUser] = useState({
  fullName: '',
  email: '',
  password: '',
})
function fieldChange(event){
  const value = event.target.value
  const nameOfInputField = event.target.name
  const updatedUser = { ...newUser, [nameOfInputField]: value}
  setNewUser(updatedUser)
  }
  async function submitButton(event){
    event.preventDefault()
   const r = await fetch(
     '/api/Users',
     {
     method: 'POST',
     headers: {'content-type': 'application/json'},
     body: JSON.stringify(newUser)
   
   }
   )
   const json = await r.json()
   
   if(r.status === 400){
     const message = Object.values(json.errors).join(' ')
     setError(message)
   } else{
   
   history.push('/')
   }
   }
   
  return (
    <>
     <header>
     <Link to="/">
        <div> Home </div>
        </Link>
      </header>
         <main>
          <h1 className="title1">Sign Up!!!</h1>
          <div className="eventFormDiv">
        <form onSubmit={submitButton}>
        {error && <p>{error}</p>}
        <p className="eventSignOn">
            <label htmlFor="name">Name</label>
            <input type="text" name="fullName" value={newUser.fullName} onChange={fieldChange}/>
          </p>
          <p className="eventSignOn">
            <label htmlFor="name">Email</label>
            <input type="email" name="email" value={newUser.email} onChange={fieldChange}/>
          </p>
          <p className="eventSignOn">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={newUser.password} onChange={fieldChange}/>
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
        </div>
      </main> 
      
    </>
  )
}