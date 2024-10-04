import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    project1, project2, project3, project4, project5, project6, link,
    github,
} from '../img'
import './style.css'

function Peoject_Card({ Myproject }) {

    return (
        <>
            <main className="project-card-main">
                <div className="project-card-div">
                    <div className="project-card-top">
                        <Link>
                            <img className='project-card-top-img rounded-t-lg bg-contain' src={project1} alt="" />
                        </Link>
                    </div>
                    <div className="project-card-bottom">
                        <h1 className="project-card-heading"> {Myproject.project_Heading} </h1>
                        <p className='project-card-description'> {Myproject.project_Description}  </p>
                        <div className="project-card-techstack">
                            <p>Tech stack : {Myproject.project_techstack}</p>

                        </div>
                        <div className="project-card-links">
                            <div className="project-card-link">
                                {/* <img src={link} alt="" className='w-3' /> (&#x1F517;) */}
                                &#x1F517;
                                <Link to={Myproject.project_LiveLink} target='_blank'>Live Preview</Link>
                            </div>
                            <div className="project-card-link">
                                <img src={github} alt="" className='w-4' />
                                <Link to={Myproject.proect_githubLink} target='_blank'>View Code</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Peoject_Card