import React, { Fragment } from 'react'
import "./nav.css";
import {Link} from "react-router-dom"

function Nav() {
  return (
    <Fragment>
        <div>
          <nav className="navbar navbar-dark" id='nav' >
          <p id='title'> HAPPENING NEWS AROUND THE GLOBE</p>
            <ul>
              <li id="li"><Link to="/">Tech-News</Link></li>
              <li><Link to="/About"> USA</Link></li>
              <li><Link to="/Contact">BBC</Link></li>
            </ul>
          </nav>
        </div>
    </Fragment>

  )
}

export default Nav