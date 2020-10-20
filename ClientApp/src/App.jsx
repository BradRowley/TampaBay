import React from 'react'
import './custom.scss'
import tampaBay1 from './pictures/tampa 1.jpg'
import tampaBay2 from './pictures/tampa 2.jpg'
import tampaBay3 from './pictures/tampa 3.jpeg'
export function App() {
  return (
    <>
    {/* need to improve header */}
      <header>
        <ul className="header">
          <li>Welcome,</li>
        </ul>
        <nav>
        <div>Home</div>
        <div>
          Add Event
              {/* <label className="buttonlabel">Add New Event:</label>
              <input className="button" type="button" value="+" /> */}
            </div>
        <div>Budget</div>
        </nav>
      </header>
      <main>
        <article>
          <h2 className="title" >Tampa Bay's Best</h2>
          <h3>
            <div>
              <label className="buttonlabel">Add New Event:</label>
              <input className="button" type="button" value="+" />
            </div>
            <form className="search">
              <input type="text" placeholder="Search..." />
            </form>

            <div>
              {/* <label for="cars">Category:</label> */}
              <label className="label">Category:</label>
              <select className="dropdown">
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
            <li>
              <h4>Bob's Burgers</h4>
              <p>Category: Food</p>
              <address>9100 Tampa Rd, Tampa, FL 33634</address>
            </li>
            <li>
              <h4>Rowdys</h4>
              <p>Category: Night life</p>
              <address>1000 Roosevelt Blvd, Clearwater, FL 33760</address>
            </li>
            <li>
              <h4>Shady Swings</h4>
              <p>Category: Outdoors </p>
              <address>1002 Jensen Rd, Clearwater, FL 33760</address>
            </li>
          </ul>
        </section>
      </main>
      <footer>
      {/* <article className="headerpictures">
          <h1>
            <img className="picture" src={tampaBay2} alt="Tampa Picture2" />
          </h1>
          <h1>
            <img className="picture2" src={tampaBay1} alt="Tampa Picture1" />
          </h1>
          <h1>
            <img className="picture3" src={tampaBay3} alt="Tampa Picture3" />
          </h1>
        </article> */}

      </footer>
    </>
  )
}
