import React from 'react'

export function EventNew() {
  return (
    <>
    <header>
        <ul className="header">
          <li>Welcome,</li>
        </ul>
      </header>
      <main>
        <form action="#">
          <p className="formsinput">
            <label htmlFor="name">Name</label>
            <input type="text" name="nameOfEvent" />
          </p>
          <p className="formsinput">
            <label htmlFor="description">Description</label>
            <textarea name="description"></textarea>
            <span className="note">Give us some details on what you did.</span>
          </p>
          <p className="formsinput">
            <label htmlFor="requirements">Event Requirements</label>
            <textarea name="requirements"></textarea>
            <span className="note">
              Please give any event requirements if any.
            </span>
          </p>
          <p className="formsinput">
            <label htmlFor="name">Average cost per person</label>
            <input type="tel" name="cost" />
          </p>
          <p className="formsinput">
            <label htmlFor="name">Address</label>
            <textarea name="address"></textarea>
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </main>
    </>
  )
}
