import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { authHeader } from '../auth'

export function EventNew() {

const[error,setError] = useState()

  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    requirements: '',
    category: '',
    cost: '',
    address: '',
  })

  const history = useHistory()
  //updates field's//
function fieldChange(event){
const value = event.target.value
const nameOfInputField = event.target.name
const updatedEvent = { ...newEvent, [nameOfInputField]: value}
setNewEvent(updatedEvent)
}
function fieldChangeNumber(event){
  const value = Number(event.target.value)
  const nameOfInputField = event.target.name
  const updatedEvent = { ...newEvent, [nameOfInputField]: value}
  setNewEvent(updatedEvent)
}
async function submitButton(event){
 event.preventDefault()
const r = await fetch(
  '/api/Events',
  {
  method: 'POST',
  headers: {'content-type': 'application/json', ...authHeader()},
  body: JSON.stringify(newEvent)

}
)
//have to be signed in to create new event
if (r.status === 401) {
  setError('Not Authorized')
} else {
  const json = await r.json()

  // If there is an error
  if (r.status === 400) {
    // Get all the errors object values (the descriptions) and join them together
    const message = Object.values(json.errors).join(' ')

    // Update our error message
    setError(message)
  } else {
    history.push('/')
  }
}
}
  return (
    <>
    <header className="header">
        <ul>
          <li>Welcome,</li>
        </ul>
        <nav>
        <Link to="/">
        <div> Home </div>
        </Link>
        </nav>
      </header>
      <hr />
      <main>
<h1>Add Event</h1>

        <form onSubmit={submitButton}>
         {error && <p>**The Name and Category sections are REQUIRED**</p>}

          <p className="eventForm">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={newEvent.name} onChange = {fieldChange}/>
          </p>
          {/* <p className="?" >?</p> */}
          <p className="eventForm">
            <label htmlFor="description">Description</label>
            <textarea name="description" placeholder="Give us some details on what you did." value={newEvent.description} onChange = {fieldChange}></textarea>
          </p>
          <p className="eventForm">
            <label htmlFor="requirements">Event Requirements</label>
            <textarea name="requirements" placeholder="Please give any event requirements if any." value={newEvent.requirements} onChange = {fieldChange}></textarea>
          </p>
          <p className="eventForm">
            <label htmlFor="name">Average $ per person</label>
            <input type="text" name="cost" value={newEvent.cost} onChange = {fieldChangeNumber}/>
          </p>
          <p className="eventForm">
            <label htmlFor="name">Address</label>
            <textarea name="address" value={newEvent.address} onChange = {fieldChange}></textarea>
          </p>
          <p>
          <select className="dropdown2">
                <option value={newEvent.category} onChange = {fieldChange} >Select Category</option>
                <option value={newEvent.category="Food"} onChange = {fieldChange}>Food</option>
                <option value={newEvent.category="Night Life"} onChange = {fieldChange}>Night Life</option>
                <option value={newEvent.category="Outdoors"} onChange = {fieldChange}>Outdoors</option>
                <option value={newEvent.category="Other"} onChange = {fieldChange}>Other</option>
              </select>
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </main>
    </>
  )
}
