import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            {
                <div>
                <div className="container-fluid">
                    <div className="banner row d-flex align-items-stretch">
                        <div className="banner-text col-6 col-offset-2 d-flex align-items-center">
                            <div>
                                <h1>I’m <b>LeMona Wyatt</b>, a design-minded fullstack software engineer, blockchain enthusiast, and diversity and inclusion advocate, focused on making things that make a difference.</h1>
                            </div>
                            <div>
                                <h5>Check out my work!</h5>
                                <div class="arrow bounce">
                                    <a href="#"><i className="fas fa-angle-down" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
             }
        </div>
    
    )
}

export default connect(null, null)(Home);
