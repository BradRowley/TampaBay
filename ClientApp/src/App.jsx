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
import { Reviews } from './pages/Reviews'
import { Edit } from './pages/Edit'
import { EventEdit } from './pages/EventEdit'

function handleLogout() {
  logout()

  window.location.assign('/')
}
const user = getUser()
export function App() {
  return (
    <>
    <header className="header">
        <div className="headerWelcome">        
         {isLoggedIn() && <li> Welcome {user.fullName},</li>}
         {isLoggedIn() || <Link to="/signin">Sign In</Link>}
              {isLoggedIn() || <Link className="signUp" to="/signup">Sign Up</Link>}
              {isLoggedIn() && (
                <span className="logout" onClick={handleLogout}>
                  SignOut
                </span>
              )}

        {isLoggedIn() && <nav>
        <Link to="/"> 
        <div className="headerHome"> Home </div>
        </Link>
        <Link to="/profile">Profile</Link>
          <Link to="/new">
        <div className="headerEvent"> Add Event </div>
        </Link>
        </nav>}
        {/* <hr /> */}
        </div>
      </header>
      <hr/>
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
      <Route exact path="/events/:id/edit">
        <EventEdit/>
      </Route>
      <Route exact path="/signup">
      <SignUp/>
         </Route>
         <Route exact path="/signin">
      <SignOn/>
         </Route> 
         <Route exact path="/events/:id/reviews">
      <Reviews/>
         </Route> 
         <Route exact path="/profile">
      <Edit/>
         </Route> 

    </Switch>
    </>
  )
}
