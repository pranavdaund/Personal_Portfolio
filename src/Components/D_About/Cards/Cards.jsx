import React from 'react'
import { Location, office, link, github, calendar } from './imgs'
import './style.css'

function Cards({ Mycollege }) {
    return (
        <main className="main-card">
            <div className='card-container'>
                <div className="top-card">
                    <h1 className='card-top-heading'> {Mycollege.branch}</h1>
                    <div className='card-top-type'>{Mycollege.type} </div>
                </div>
                <div className="bottom-card bottom-div">
                    <div className="bottom-div">
                        <img className='mr-2 w-5' src={office} alt="" />
                        <p className='card-bottom'>{Mycollege.collegeName} </p>
                    </div>
                    <div className=" bottom-div">
                        <img className='h-3.5 mr-2' src={calendar} alt="" />
                        <p className='card-bottom'>{Mycollege.startDate} - {Mycollege.endDate}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cards