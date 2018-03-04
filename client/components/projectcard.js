import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

const ProjectCard = (props) => {
    console.log('props', props)
    const { name, description, image } = props
    return (
        <div className="card-wrapper col-4">
            <div className="card">
                <div className="card-body-hover">
                    <p className="card-text">{description}</p>
                </div>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    )
}

export default connect(null, null)(ProjectCard)