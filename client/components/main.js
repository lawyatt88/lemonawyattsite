import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Home} from '../components'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children} = props

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/home" id="title">LeMona Wyatt</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top-nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-end" id="top-nav">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/products">About</Link></li>
            <li><Link to="/products">About</Link></li>
            <li><Link to="/products">About</Link></li>
          </ul>
        </div>
      </nav>
      <hr className="hr-nav" />
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */

// const mapDispatch = (dispatch) => {
//   return {
//     handleClick () {
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(null, null)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object
}
