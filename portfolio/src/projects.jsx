import './projects.css'

import React from 'react';
import image1 from './img/lp2.png'
import jp from'./img/jp.png'
import news from './img/news.png'


import { NavLink } from 'react-router-dom';

function Projects( {heading,text}){
    return(
        <div className='big'>
            <div className='hero-img-projects'> 
                <div className='heading'>
                    <h1>{heading}</h1>
                    <p>{text}</p>
                </div>
            </div>

            <div className='work-container'>
                <div>
                <h1 className='minor-heading'>Projects</h1>
                </div>
                <div className='displayy'>
                <div className='project-container'>
                    <div className='project-card'>
                        <img src={jp} alt="image" />
                        <h2 className='project-title'>JamboLife2.0</h2>
                        <div className='pro-details'>
                            <p>A backend project for an even ticketing system used by multiple cinemas in Nairobi.
                                Powered by Python(Django)
                            </p>
                            <div className='pro-btns'>
                                <NavLink  className='btn' to='https://github.com/JohnMartin-19/jambolife2.0'>Source</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='project-container'>
                    <div className='project-card'>
                        <img src={news} alt="image" />
                        <h2 className='project-title'>NewspaperApp</h2>
                        <div className='pro-details'>
                            <p>A Newspaper App project. Handles both frontend and backend aspects.(CRUD)operations.
                                Powered by Python(Django)
                            </p>
                            <div className='pro-btns'>
                                <NavLink  className='btn' to='https://github.com/JohnMartin-19/newspaper-app'>Source</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='project-container'>
                    <div className='project-card'>
                        <img src={image1} alt="image" />
                        <h2 className='project-title'>BlogApplication</h2>
                        <div className='pro-details'>
                            <p>A mini project testing my skills in Python.The app handles HTTP requests and CRUD operations.Authentication is also enforced by django.
                            Powered by Python(Django)
                            </p>
                            <div className='pro-btns'>
                                <NavLink  className='btn' to='https://github.com/JohnMartin-19/blog-app'>Source</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <br />

                <div className='project-container'>
                    <div className='project-card'>
                        <img src={image1} alt="image" />
                        <h2 className='project-title'>RobotBattler</h2>
                        <div className='pro-details'>
                            <p>A frontend project that entails interaction with a backend via API.Uses REACT hooks to fetch data & performs CRUD operations.
                            Powered by JavaScript(REACT)
                            </p>
                            <div className='pro-btns'>
                                <NavLink  className='btn' to='https://github.com/JohnMartin-19/Bot-Battlr'>Source</NavLink>
                            </div>
                        </div>
                    </div>
                </div>    
                
                <div className='project-container'>
                    <div className='project-card'>
                        <img src={image1} alt="image" />
                        <h2 className='project-title'>BankofFlation</h2>
                        <div className='pro-details'>
                            <p>A frontend project for an banking system used by a bank to track the transactions made by users.Handles CRUD operations.(JSON-Server).Powered by JavaScript(REACT)
                            </p>
                            <div className='pro-btns'>
                                <NavLink  className='btn' to='https://github.com/JohnMartin-19/Bank-of-Flatiron'>Source</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                </div> 
            </div>
        </div>
    
    )
}

export default Projects