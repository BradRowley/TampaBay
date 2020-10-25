import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
  return (
    <>
    {/* need to improve header */}
      <header className="header">
        <div>
          <li>Welcome,</li>
        </div>
        <nav>
        <Link to="/">
        <div> Home </div>
        </Link>
          <Link to="/new">
        <div> Add Event </div>
        </Link>
        <div>Budget</div>
        </nav>
        <hr />
      </header>
      <main>
        <article>
          <h2 className="title" >Tampa Bay's Best</h2>
          <h3>
            <div>
              <label className="buttonlabel">Sign Out:</label>
              <input className="button" type="button" value="+" />
            </div>
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
              <option value="">Select Category</option>
                <option value="food">Food</option>
                <option value="nightlife">Night Life</option>
                <option value="outdoors">Outdoors</option>
                <option value="other">Other</option>
              </select>
            </div>
          </h3>
        </article>
        <section>
          <ul>
          {events.map((event)=> (
            <li key={event.id}>
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
      {/* <footer>
      <article className="headerpictures">
          <h1>
            <img className="picture" src={tampaBay2} alt="Tampa Picture2" />
          </h1>
          <h1>
            <img className="picture2" src={tampaBay1} alt="Tampa Picture1" />
          </h1>
          <h1>
            <img className="picture3" src={tampaBay3} alt="Tampa Picture3" />
          </h1>
        </article>

      </footer> */}
    </>
  )
}
