import React from "react";
import './TechStack.css';
import html from './img/html.jpg'
import css from './img/css.jpg'
import  js from './img/js.jpg'
import rctjs from './img/React.jpg'
import py from './img/py.jpg'
import dj from './img/dj.jpg'

function TechStack({heading}){
    return(
        <div className="overall">
            <h1>{heading}</h1>
            
            <div className="background">
                <div className="gallery">
                    <div className="card-tech">
                    <h6>HTML</h6>
                        <figure>
                            <img 
                            src={html} 
                            alt="HTML"
                             />
                        </figure>
                    </div>
                    
                    <div className="card-tech">
                    <h6>CSS</h6>
                        <figure>
                            <img 
                            src={css}
                            alt="Cascading Styles"
                             />
                        </figure>
                    </div>
                    
                    <div className="card-tech">
                    <h6>JavaScript</h6>
                        <figure>
                            <img 
                            src={js} 
                            alt="Javascript"
                             />
                        </figure>
                    </div>

                    <div className="card-tech">
                    <h6>REACTJS</h6>
                        <figure>
                            <img 
                            src={rctjs} 
                            alt="ReactJS"
                             />
                        </figure>
                    </div>

                    <div className="card-tech">
                    <h6>Python</h6>
                        <figure>
                            <img 
                            src={py}
                            alt="Python"
                             />
                        </figure>
                    </div>

                    <div className="card-tech">
                    <h6>DJANGO</h6>
                        <figure>
                            <img 
                            src={dj} 
                            alt="django"
                             />
                        </figure>
                    </div>


                </div>

            </div>

        </div>
    )
}
export default TechStack