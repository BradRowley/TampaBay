import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

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
  headers: {'content-type': 'application/json'},
  body: JSON.stringify(newEvent)

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
        <ul className="header">
          <li>Welcome,</li>
        </ul>
      </header>
      <main>
        <form onSubmit={submitButton}>
         {error && <p>The Name and Category sections are REQUIRED</p>}

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
          {/* Having issues having the dropdown being saved */}
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
