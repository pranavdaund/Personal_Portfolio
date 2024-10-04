import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


function Contact() {
    return (
        <>
            <main className='main-conatct'>
                <div className='contact-div'>
                    <h2 className='contact-top'>For any question please mail us:</h2>
                    <h2 className='contact-bottom'>
                        <Link to={'mailto:pranavaund72@gmail.com'}>
                            pranavdaund72@gmail.com
                        </Link>
                    </h2>
                </div>
            </main >
        </>
    )
}

export default Contact