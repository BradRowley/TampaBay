import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { authHeader, getUser, isLoggedIn } from '../auth'
// import format from 'date-fns/format'

const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`
export function OneEvent(){
  {
    const history = useHistory()
    const user = getUser()

    const params = useParams()
    const id = Number(params.id)

  const [event, setEvent] = useState({
    id: 0,
    name: "string",
    description: "string",
    requirements: "string",
    category: "string",
    cost: 0,
    address: "string",
    reviews: [],
  })
 
  async function fetchEvent() {
    const response = await fetch(`/api/Events/${id}`)
    const apiData = await response.json()

    setEvent(apiData)
  }
  useEffect(() => {
    fetchEvent()
  }, [id])

  async function handleDelete(event) {
    event.preventDefault()
  
    const response = await fetch(`/api/Events/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })
  
    if (response.status === 200 || response.status === 204) {
      history.push('/')
    }
  }

  return (
    <>
    {isLoggedIn() || <header className="home">
     <Link to="/">
        <div> Home </div>
        </Link>
      </header>}
      <main className="oneEvent">
        <div>
          <article className="eventOne">
          <h2 className="eventTitle">{event.name} </h2>
        {/* <hr /> */}
        </article>
        <article className="eventOne">
        <label className="labelTitle"> Category:</label>
        <p>
        {event.category}
        </p>
        </article>
        {/* <hr /> */}
        <article className="eventOne">
        <label className="labelTitle"> Description:</label>
        <p>
          {event.description}
        </p>
        </article>
        <article className="eventOne">
        {/* <hr /> */}
        <label className="labelTitle"> Event Requirements:</label>
        <p>{event.requirements}</p>
        </article>
        <article className="eventOne">
        {/* <hr /> */}
        <label className="labelTitle"> Average cost per person:</label>
        <p>
          ${event.cost}
        </p>
        </article>
        <article className="eventOne">
        <label className="labelTitle"> Address:</label>
        <></>
        <address>{event.address}</address>
        </article>
        {/* reviews */}
        
       {isLoggedIn() && event.userId === user.id && (
        <button onClick={handleDelete}>Delete</button>
        )}
   </div>
      </main>
      {isLoggedIn() &&<section className="addReview">
        <Link className="reviews" to={`/events/${event.id}/reviews`}>
                  Reviews
                </Link>
                <Link to={`/events/${event.id}/reviews`}>
                  Add Review
                </Link>
        </section>}
      
    </>
  )
}
}