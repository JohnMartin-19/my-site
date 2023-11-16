import React from "react";
import './home.css';
import lp from './img/IMG_9120.JPG'
import { Link } from "react-router-dom";
import Footer from "./footer";

function Home(){
    return(
        <div  className="hero">
            <div className="mask">
                <img className="intro-img" src={lp} alt="landing page" />
            </div>
            <div className="content">
                <p>Hi, I'M A FREELANCER</p>
                <h2 style={{color:'white'}}>REACT & DJANGO DEVELOPER</h2>
                <Link to='/Projects' className="btn">Projects</Link>
                <Link className="btn btn-light" to='/Contact Me'>Reach Out</Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Home