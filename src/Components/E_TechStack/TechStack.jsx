import React from 'react'
import {
    bootstrap,
    css,
    figma,
    git,
    github,
    gsap,
    html,
    javascript,
    npm,
    postman,
    react,
    redux,
    sass,
    tailwind,
    vscode,
} from './img'
import './style.css'
import { Link } from 'react-router-dom'


function TechStack() {
    return (
        <>

            <main className="tectstack-main">
                <div className="techstack-main-div ">
                    <div className="techstack-top mb-10">
                        <h1 className='techstack-heading'>My Tech Stack</h1>
                        <p className='techstack-paragrapgh'> Technologies I’ve been working with recently</p>
                        <div className="techstack-elements">
                            <Link>
                                <img src={html} alt="" className='techstack-element-icon' />
                            </Link>
                            <Link>
                                <img src={css} alt="" className='techstack-element-icon' />
                            </Link>
                            <Link>
                                <img src={javascript} alt="" className='techstack-element-icon' />
                            </Link>
                            <Link>
                                <img src={react} alt="" className='techstack-element-icon' />
                            </Link>
                            <Link>
                                <img src={redux} alt="" className='techstack-element-icon' />
                            </Link>
                            <Link>
                                <img src={tailwind} alt="" className='techstack-element-icon' />
                            </Link>
                        </div>
                    </div>
                    <div className="techstack-bottom">
                        <h1 className='techstack-heading'>Tools</h1>
                        {/* <p className='techstack-paragrapgh'> Technologies I’ve been working with recently</p> */}
                        <div className="techstack-elements">

                            <Link>
                                <img src={vscode} alt="" className='techstack-element-icon' />
                            </Link>
                            <Link>
                                <img src={git} alt="" className='techstack-element-icon' />
                            </Link>
                            <Link>
                                <img src={github} alt="" className='techstack-element-icon' />
                            </Link>

                            <Link>
                                <img src={postman} alt="" className='techstack-element-icon' />
                            </Link>
                            <Link>
                                <img src={figma} alt="" className='techstack-element-icon' />
                            </Link>
                            <Link>
                                <img src={npm} alt="" className='techstack-element-icon' />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default TechStack