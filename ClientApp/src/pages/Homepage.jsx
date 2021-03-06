import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUser, isLoggedIn, logout, recordAuthentication } from '../auth'
// import tampaBay1 from './pictures/tampa 1.jpg'
// import tampaBay2 from './pictures/tampa 2.jpg'
// import tampaBay3 from './pictures/tampa 3.jpeg'

export function Homepage() {
  const [events, setEvents] = useState([])
  const [searchingEvent, setSearchingEvent] = useState('')
  useEffect(function(){
    async function fixAsyncError(){
      const url = `/api/events?filter=${searchingEvent}`
    const response = await fetch(url)
    const json =await response.json()
    setEvents(json)
    }
    fixAsyncError()
  }, [searchingEvent,])
  function handleLogout() {
    logout()
    
    window.location.assign('/')
  }
  const user = getUser()
  return (
    <>
      <main>
        <article>
          <h2 className="title" >Tampa Bay's Best</h2>
          <h3 className="eventFormDiv">
          {/* {isLoggedIn() || <Link to="/signup">Sign Up</Link>} */}
          {/* {isLoggedIn() || <Link to="/signin">Sign In</Link>}
          {isLoggedIn() && (
                <span className="link" onClick={handleLogout}>
                  Sign out
                </span>
              )} */}
            <form className="searchbutton">
          <input
            type="text"
            placeholder="Search..."
            value={searchingEvent}
            onChange={function (event) {
              setSearchingEvent(event.target.value)
            }}
          />
        </form>

            <div>
              {/* <label for="cars">Category:</label> */}
              
              <select className="dropdown">
              <option value={searchingEvent} onClick={function (event) {
              setSearchingEvent("")
            }}>Select Category</option>
                <option value={searchingEvent} onClick={function (event) {
              setSearchingEvent("Food")
            }} > Food</option>
                <option value={searchingEvent} onClick={function (event) {
              setSearchingEvent("Night Life")
            }}>Night Life</option>
                <option value={searchingEvent} onClick={function (event) {
              setSearchingEvent("Outdoors")
            }}>Outdoors</option>
                <option value={searchingEvent} onClick={function (event) {
              setSearchingEvent("Other")
            }}>Other</option>
              </select>
            </div>
          </h3>
        </article>
        <section className="eventFormDivv">
          <ul >
          {events.map((event)=> (
            <li className="listOfEvents" key={event.id}>
              <h4>
              <Link to={`/events/${event.id}`}>
                  {event.name}
                </Link>
                </h4>
                
              <p>{event.category}</p>
              <address>{event.address}</address>
            </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
