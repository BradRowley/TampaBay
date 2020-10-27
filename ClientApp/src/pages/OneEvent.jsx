import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { authHeader } from '../auth'
// import format from 'date-fns/format'

const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`
export function OneEvent(){
  {
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
  const [newReview, setNewReview] = useState({
    body: '',
    bestWorst: '',
    title:'',
    eventId: id,
  })
  async function fetchEvent() {
    const response = await fetch(`/api/Events/${id}`)
    const apiData = await response.json()

    setEvent(apiData)
  }
  useEffect(() => {
    fetchEvent()
  }, [id])
  function handleNewReviewFieldChange(event) {
    const name = event.target.name
    const value = event.target.value
  
    setNewReview({ ...newReview, [name]: value })
  }
  async function handleNewReviewSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Reviews`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ... authHeader() },
      body: JSON.stringify(newReview),
      
    })

    setNewReview({
      ...newReview,
      body: '',
    bestWorst: '',
    title:'',
    })

    fetchEvent()
  }

  return (
    <>
      <main>
        <nav>
          <a href="/">
            <i className="fa fa-home"></i>
          </a>
          {/* <label> Name</label> */}
          <h2>{event.name} </h2>
        </nav>
        {/* <hr /> */}
        <label> Category</label>
        <p>
        {event.category}
        </p>
        {/* <hr /> */}
        <label> Description</label>
        <p>
          {event.description}
        </p>
        {/* <hr /> */}
        <label> Requirements</label>
        <p>{event.requirements}</p>
        {/* <hr /> */}
        <label> Average cost per person</label>
        <p>
          ${event.cost}
        </p>
        <label> Address</label>
        <></>
        <address>{event.address}</address>
      </main>
    </>
  )
}
}