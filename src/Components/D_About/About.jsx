import React from 'react'
import './style.css'
import Cards from './Cards/Cards'
function About() {

    const college = {
        collegeName: "JSPM Rajashri Shahu College of Engineering Pune",
        type: "Full Time",
        branch: "Electronic & Telecommunication Engineering",
        startDate: "July 2020",
        endDate: "June 2024"

    }

    const college2 = {
        collegeName: "PMT Arts, Commerces & Science College Shevgaon",
        type: "Full Time",
        branch: "Higher Secondary Certificate (Science) ",
        startDate: "June 2018",
        endDate: "May 2020"

    }

    return (
        <>
            <main className="main-about">
                <div className="main-div">
                    <div className="about-div">
                        <h1 className='about-heading'>About Me</h1>
                        <p className='about-info'>A passionate and results-driven B.Tech graduate in Electronics and Telecommunication Engineering, I specialize in software development with a strong foundation in Java, Data Structures, and web technologies like HTML, CSS, JavaScript, and React JS. I enjoy solving coding challenges, building interactive web applications, and continuously enhancing my problem-solving skills. With a track record of developing dynamic applications and excelling in high-pressure environments, I am always eager to take on new challenges and contribute to impactful projects.</p>
                    </div>
                    <div className="workexp-div  hidden">
                        <h1 className='about-heading'>Work Experience</h1>
                        <p> I am Fresher</p>
                    </div>
                    <div className="education-div">
                        <h1 className='about-heading'>Eduction</h1>
                        <Cards Mycollege={college} /> <hr />
                        <Cards Mycollege={college2} />

                    </div>
                </div>
            </main>
        </>
    )
}

export default About