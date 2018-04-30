import React, {Component} from 'react'
import ReactDOM from 'react-dom'
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
class Main extends Component {
  constructor (props) {
    super(props)
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.getElementById("navbar").style.opacity = "0";
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let bannerHeight = ReactDOM.findDOMNode(this.banner).clientHeight
    if (document.body.scrollTop > bannerHeight || document.documentElement.scrollTop > bannerHeight) {
      document.getElementById("navbar").style.opacity = "1";
    } else {
      document.getElementById("navbar").style.opacity = "0";
    }
  }

  render() {
    const {children} = this.props
    return (
    <div>
      <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/home" id="title">LeMona Wyatt</Link>
        <Link className="navbar-resume nav navbar-nav navbar-right" to="./LWyattResume-201804.pdf" id="title" target="_blank">View My Resume</Link>
      </nav>
      <hr className="hr-nav" />
      {children}
    </div>
  )}
}

export default withRouter(connect(null, null)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object
}
