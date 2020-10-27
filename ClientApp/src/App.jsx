import React, { useEffect, useState } from 'react'
import './custom.scss'
import { Switch, Route, Link} from 'react-router-dom'
// import tampaBay1 from './pictures/tampa 1.jpg'
// import tampaBay2 from './pictures/tampa 2.jpg'
// import tampaBay3 from './pictures/tampa 3.jpeg'
import { Homepage } from './pages/Homepage'
import { EventNew } from './pages/EventNew'
import { OneEvent } from './pages/OneEvent'
import {SignUp} from './pages/SignUp'
import { SignOn } from './pages/SignOn'
import {getUser, isLoggedIn, logout} from './auth'

function handleLogout() {
  logout()

  window.location.assign('/')
}
const user = getUser()
export function App() {
  return (
    <>
    <header className="header">
        <div>
              {isLoggedIn() || <Link to="/signin">Sign In</Link>}
              {isLoggedIn() || <Link to="/signup">Sign Up</Link>}
              {isLoggedIn() && <Link to="/profile">Profile</Link>}
              {isLoggedIn() && (
                <span className="link" onClick={handleLogout}>
                  Sign out
                </span>
              )}</div>
        <div>
         {isLoggedIn() && <li>Welcome {user.fullName}</li>}
        </div>
        {isLoggedIn() && <nav>
        <Link to="/"> 
        <div> Home </div>
        </Link>
          <Link to="/new">
        <div> Add Event </div>
        </Link>
        <div>Budget</div>
        </nav>}
        <hr />
      </header>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/new">
        <EventNew />
      </Route>
      <Route exact path="/events/:id">
        <OneEvent/>
      </Route>
      <Route exact path="/signup">
      <SignUp/>
         </Route>
         <Route exact path="/signin">
      <SignOn/>
         </Route> 
    </Switch>
    </>
  )
}
