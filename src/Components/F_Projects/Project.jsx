import React from 'react'
import Peoject_Card from './Card/Peoject-Card'
import { projectdec1, projectdec2 } from './Prop'
import './style.css'


function Project() {

    return (
        <>

            <main className='project-main-div1 '>
                <div className="project-main-div2 ">
                    <Peoject_Card Myproject={projectdec1} />
                    <Peoject_Card Myproject={projectdec2} />
                    <Peoject_Card Myproject={projectdec1} />
                    <Peoject_Card Myproject={projectdec1} />
                </div>
            </main>

        </>
    )
}

export default Project