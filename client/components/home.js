import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { ProjectCard } from '../components'

class Home extends Component {
    constructor (props) {
      super(props)
      this.scrollToFeatured = this.scrollToFeatured.bind(this)
    }

    scrollToFeatured(evt) {
        this.refs.featured.scrollIntoView({behavior: "smooth", block: "start"})
    }

    render(){
    const featuredWorkArr = [
        {
            name: "Potluck",
            description: "An app for reducing food waste on a local scale in which users barter excess food items via smart contracts and blockchain technology.",
            image: "./images/screencapture_potluck_community.png",
            link: "",
            github: "https://github.com/lawyatt88/Potluckv3"
        },
        {
            name: "Picspiration",
            description: "Mobile application that harnesses the word predictability features of the Clarifai API to find relevant quotes based on image input.",
            image: "./images/Picspiration-03.png",
            link: "",
            github: "https://github.com/lawyatt88/picspiration"
        },
        {
            name: "Choko",
            description: "A fully functional e-commerce application for a chocolatier in which users can browse products, create an account, purchase products, leave reviews and view past orders.",
            image: "./images/screencapture-choko.png",
            link: "https://choko-hopper.herokuapp.com",
            github: "https://github.com/Choko-Hopper/choko-hopper"
        },
        // {
        //     name: "Brand Identity",
        //     description: "",
        //     image: "",
        // }
    ]

    const otherWorkArr = [
        {
            name: 'Meraki Yoga Studio',
            link: 'https://www.merakiyogastudio.com',
            description: 'A mobile responsive application in which users can see information about classes, scheduling, class packages, and instructors',
            details: ['Implemented design template as the sole developer using Underscores, HTML, CSS, PHP, and Bootstrap']

        },
        {
            name: 'Ashley Woodson Bailey',
            link: 'https://www.ashleywoodsonbailey.com',
            description: 'An e-commerce application in which users can browse signature “florography” art prints, wallpaper, fabrics, and limited-edition products',
            details: ['Implemented design template as the sole developer using Underscores, HTML, CSS, PHP, and Bootstrap']

        },
        {
            name: 'Wonderwall Studio', 
            link: 'https://www.wonderwallstudio.com',
            description: 'An eCommerce application in which users can browse, customize, and purchase artwork',
            details: ['Defined, implemented, and maintained database schema and models',
            'Coordinated the migration of over 2000 products from an existing system to a new database']
        },
        {
            name: 'Torrto',
            link: 'https://www.github.com/lawyatt88/torrto',
            description: 'An informational web application for a web development and digital marketing agency',
            details: ['Designed and developed custom WordPress theme using HTML, CSS, PHP, and Bootstrap',
            'Created logo, print collateral, web design template and complete branding guidelines']
        }
        
    ]

    return (
        <div>
            {
                <div>
                <div className="container-fluid">
                    <div id="banner" name="banner" className="banner row d-flex align-items-stretch">
                        <div className="banner-text col-12 col-sm-6 col-md-8 d-flex align-items-center">
                            <div>
                                <h1>I’m <b>LeMona Wyatt</b>, a design-minded fullstack software engineer, blockchain enthusiast, and diversity and inclusion advocate, focused on making things that make a difference.</h1>
                            </div>
                        </div>
                        <div id="arrow-wrapper" className="col-12 d-flex flex-column align-items-center mt-auto p-2">
                            <h4>Check out my work!</h4>
                            <div className="arrow bounce" onClick={this.scrollToFeatured} />
                        </div>
                    </div>
                    <div id="featured-work" ref="featured" className="section featured-work row d-flex align-items-stretch">
                        <h4 className="title col-12 col-md-3 d-inline-flex p-2">Featured Work</h4>
                        <div className="col-12 col-md-8 d-inline-flex p-2 flex-wrap">
                            {featuredWorkArr.map((work, i) => {
                                return <ProjectCard key={i} {...work} />
                            })}
                        </div>
                    </div>
                    <div className="section other-work row d-flex align-items-stretch">
                        <h4 className="title col-12 col-md-3 d-inline-flex p-2r">Other Work</h4>
                        <div className="col-12 col-md-8 d-inline-flex p-2 flex-wrap">
                            <ul className="projects">
                            {otherWorkArr.map((work, i) => {
                                return (<li key={i}>
                                    <div className="work-wrapper">
                                        <a href={work.link} target="_blank"><h4>{work.name}</h4></a>
                                        <h5>{work.description}</h5>
                                        <ul>
                                            {work.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                        </ul>
                                    </div>
                                </li>)
                            })}
                            </ul>
                        </div>
                    </div>
                    <div className="section contact row d-flex align-items-stretch">
                        <div className="col-12 col-md-5 contact-img" />
                        <div className="col-12 col-md-5 col-md-offset-6 contact-content">
                            <h5>Thank you so much for visiting lemonawyatt.com! I am currently actively seeking a position as a <b>full stack software engineer</b> or <b>solidity developer</b>. If you like what you see, have any leads, or any interesting project ideas, please reach out to me at <a href="mailto:lemonawyatt@gmail.com">lemonawyatt@gmail.com</a> or through any of the social media sites below. Stay tuned for my upcoming blog BlackGirlonBlockchain.com!</h5>
                            <ul className="list-inline social-icons">
                                <li className="connect">Let's Connect!</li>
                                <li><a href="https://www.linkedin.com/in/lemona-wyatt/" target="_blank">
                                <svg className="svg-inline--fa fa-w-16" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="14 14 40 40" enableBackground="new 14 14 40 40" xmlSpace="preserve">
                                    <path fill="currentColor" d="M45.225,43.425v-7.809c0-4.183-2.233-6.129-5.21-6.129c-2.403,0-3.48,1.322-4.08,2.249v-1.929h-4.527
                                    c0.061,1.278,0,13.618,0,13.618h4.527v-7.605c0-0.406,0.029-0.813,0.149-1.104c0.327-0.813,1.071-1.655,2.321-1.655
                                    c1.639,0,2.293,1.249,2.293,3.079v7.285H45.225L45.225,43.425z M26.639,27.948c1.578,0,2.562-1.046,2.562-2.354
                                    c-0.029-1.336-0.983-2.352-2.531-2.352s-2.561,1.016-2.561,2.352c0,1.307,0.982,2.354,2.502,2.354H26.639z M34,54
                                    c-11.045,0-20-8.954-20-20s8.955-20,20-20c11.046,0,20,8.954,20,20S45.046,54,34,54z M28.903,43.425V29.807h-4.526v13.618H28.903z"
                                    />                                     
                                </svg>
                                </a></li>
                                <li><a href="https://github.com/lawyatt88" target="_blank"><i className="fab fa-github" /></a></li>
                                <li><a href="https://plus.google.com/u/0/113298364825465357558" target="_blank"><i className="fab fa-google-plus" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
             }
        </div>
    )}
}

export default connect(null, null)(Home);
