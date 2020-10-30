import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { authHeader, isLoggedIn } from '../auth'
import format from 'date-fns/format'

const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`
export function Reviews(){
  
    const params = useParams()
    const id = Number(params.id)
  
const[error,setError] = useState()

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
  function handleFieldChange(event) {
    const name = event.target.name
    const value = event.target.value
  
    setNewReview({ ...newReview, [name]: value })
  }
  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Reviews`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ... authHeader() },
      body: JSON.stringify(newReview),
      
    })
    if (response.status === 401) {
      setError('Not Authorized')
    } else {
      const json = await response.json()

      if (response.status === 400) {
        setError(Object.values(json.errors).join(' '))
      } else {

    setNewReview({
      ...newReview,
      body: '',
    bestWorst: '',
    title:'',
    })

    fetchEvent()
  }
  
  }
}

  return (
    <>
    <main className="reviewsForm">
    {event.reviews.length > 0 &&<ul >
     <h2 className="reviewsTitle" >Reviews</h2>
        {event.reviews.map((review) => (
          <li key={review.id}>
            <div className="wroteBy">
             Wrote by: {review.user.fullName}
            </div>
            <label className="reviewsLabel">Title</label>
            <div className="answers">{review.title}</div>
            <div >
            <label className="reviewsLabel" >Review</label>
              <p className="answers">{review.body}</p>
            </div>
            <label className="reviewsLabel">Best/Worst Experience</label>
            <div className="answers">{review.bestWorst}</div>
            <div>
            <time className="answers">{format(new Date(review.createdAt), dateFormat)}</time>
            </div>
          </li>
        ))}
      </ul>}

      {isLoggedIn() && (
        <>
          {/* <h3 >Enter your own review</h3> */}
          <form  onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <h3 className="reviewsTitle">Enter your own review</h3>
            <p className="eventFormR">
              <label htmlFor="title">Title of Review</label>
              <input
                type="text"
                name="title"
                value={newReview.title}
                onChange={handleFieldChange}
              />
              <span >
                Enter a title for your review
              </span>
            </p>
            <p className="eventFormR">
              <label htmlFor="body">Review</label>
              <textarea
                type="text"
                name="body"
                value={newReview.body}
                onChange={handleFieldChange}
              ></textarea>
            </p>
            <p className="eventFormR">
              <label htmlFor="bestWorst">Best / Worst</label>
              <textarea
                type="text"
                name="bestWorst"
                value={newReview.bestWorst}
                onChange={handleFieldChange}
              ></textarea>
              <span >
                Enter best and worst thing about experience
              </span>
            </p>
            
            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
        </>
      )}
    </main>
    </>
  )
}
