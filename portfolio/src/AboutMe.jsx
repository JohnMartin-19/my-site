import React from "react";
import cv from './img/RESUME.docx'
import './aboutme.css';
import { Link } from "react-router-dom";

function About( { heading, text }){
    return(
        <div className="overall">
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{heading}</h1>
                    <p>{text}</p>
                </div>
            </div>
            <div className="intro">
                <p>
                    Meet John Mburu, a dedicated and ambitious individual with a passion for technology and software engineering. I began my educational journey at Lenana School, where I laid the foundation for my academic excellence. I later pursued a Bachelor's degree in Information Technology at Mount Kenya University (MKU), showcasing my commitment to gaining a strong educational background.

                    Currently enrolled as a Software Engineering student at Moringa School, honing my skills and staying at the forefront of technological advancements. This hands-on experience complements my academic knowledge, fostering a well-rounded approach to software development.

                    One of the highlights of my journey is a valuable three-month internship at a fintech company in Nairobi (JamboPay), where I delved into the practical aspects of the industry. This internship, spanning from May to August 2023, provided me with a real-world understanding of software engineering in a professional setting, enhancing my problem-solving abilities and industry-specific skills.

                    With a unique blend of academic excellence, practical experience, and a determined attitude, I pray that I am  poised for a successful career in the dynamic field of software engineering. As I continue to grow and learn, I remain committed to pushing the boundaries of innovation and contributing to the ever-evolving tech landscape.
                    
                </p>
                <div className="cv">
                    <h4>You can view my CV down below</h4>
                <a href={cv} className="btn">Download CV</a>
                </div>
            </div>
            
            <section >
            <div className="pricing">
                <div className="card-container">
                    <div className="card">
                    <h3>--BASIC--</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>- 3 days -</p>
                    <p>- 3pages -</p>
                    <p>- Featured - </p>
                    <p>-Responsive Design -</p>
                    <Link to='/Contact Me' className='btn'>PURCHASE NOW</Link>
                    </div>

                    <div className="card">
                    <h3>--PREMIUM--</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 200</p>
                    <p>- 5 days -</p>
                    <p>- 5 pages -</p>
                    <p>- Featured -</p>
                    <p>-Responsive Design -</p>
                    <Link to='/Contact Me' className='btn'>PURCHASE NOW</Link>
                    </div>

                    <div className="card">
                    <h3>--BUSINESS--</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 300</p>
                    <p>- 2 weekss -</p>
                    <p>- 8 pages -</p>
                    <p>- Featured -</p>
                    <p>-Responsive Design -</p>
                    <Link to='/Contact Me' className='btn'>PURCHASE NOW</Link>
                    </div>
                </div>
            </div>
            </section>
            <br />
            <br />
            
        </div>
        

    )
}

export default About