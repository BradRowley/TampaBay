import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { authHeader, isLoggedIn } from '../auth'
// import format from 'date-fns/format'

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
    <main>
    <ul className="reviews">
        {event.reviews.map((review) => (
          <li key={review.id}>
            <div className="author">
              {/* {review.user.fullName} said: <em>{review.summary}</em> */}
            </div>
            <div>{review.title}</div>
            <div className="body">
              <p>{review.body}</p>
            </div>
            <div>{review.bestWorst}</div>
            <div>
              <time>{review.createdAt}</time>
            </div>
          </li>
        ))}
      </ul>

      {isLoggedIn() && (
        <>
          <h3>Enter your own review</h3>
          <form onSubmit={handleNewReviewSubmit}>
            {error && <p>{error}</p>}
            <p className="form-input">
              <label htmlFor="title">Title of Review</label>
              <input
                type="text"
                name="title"
                value={newReview.title}
                onChange={handleNewReviewFieldChange}
              />
              <span >
                Enter a brief summary of your review. Example:{' '}
                <strong>Great food, good prices.</strong>
              </span>
            </p>
            <p className="form-input">
              <label htmlFor="body">Review</label>
              <textarea
                type="text"
                name="body"
                value={newReview.body}
                onChange={handleNewReviewFieldChange}
              ></textarea>
            </p>
            <p className="form-input">
              <label htmlFor="bestWorst">Best / Worst</label>
              <textarea
                type="text"
                name="bestWorst"
                value={newReview.bestWorst}
                onChange={handleNewReviewFieldChange}
              ></textarea>
              <span >
                Enter a brief summary of your review. Example:{' '}
                <strong>Great food, good prices.</strong>
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
