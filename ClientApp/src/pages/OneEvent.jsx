import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export function OneEvent(){
  {
    const params = useParams()
    const id = params.id

  const [event, setEvent] = useState({
    id: 0,
    name: "string",
    description: "string",
    requirements: "string",
    category: "string",
    cost: 0,
    address: "string",
  })
  useEffect(() => {
    async function fetchEvent() {
      const response = await fetch(`/api/Events/${id}`)
      const apiData = await response.json()
  console.log(apiData)
      setEvent(apiData)
    }
  
    fetchEvent()
  }, [id])
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