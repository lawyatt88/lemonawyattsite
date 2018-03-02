import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {
  Main,
  Home
} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path="/home" component={Home} />
            
            {/* Displays our Login component as a fallback */}
            <Route component={Home} />

          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {

  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    loadInitialData() {
    }
  }
}

export default connect(null, null)(Routes)

/**
 * PROP TYPES
 */

