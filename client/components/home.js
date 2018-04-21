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
            image: "",
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
        {
            name: "Brand Identity",
            description: "",
            image: "",
        }
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
                        <div class="row justify-content-center">
                            <div className="col-10 col-md-6 col-md-offset-6 contact">
                                <h4>Thank you so much for visiting lemonawyatt.com! I am currently actively seeking a position as a <b>full stack software engineer</b> or <b>solidity developer</b>. If you like what you see, have any leads, or any interesting project ideas, please reach out to me at <a href="mailto:lemonawyatt@gmail.com">lemonawyatt@gmail.com</a> or through any of the social media sites below. Stay tuned for my upcoming blog BlackGirlonBlockchain.com!</h4>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
             }
        </div>
    )}
}

export default connect(null, null)(Home);
