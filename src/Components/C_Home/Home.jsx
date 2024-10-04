import React from 'react'
import './style.css'
import { useLoaderData } from 'react-router-dom'


function Home() {
    const data = useLoaderData()
    return (
        <>
            <main className="main-home">
                <div className="home-div">
                    <div className="left-home">

                        <p className='home-text1'> Hi 👋,</p>
                        <p className='home-text1'>My name is</p>
                        <p className='home-text2'>Panav Daund</p>
                        <p className='home-text1'>I build things for web</p>

                    </div>
                    <div className="right-home">
                        <div className="photo-img">
                            <img src={data.avatar_url} alt="" className='photo-home' />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export default Home

export const githubinfoloader = async () => {
    const responce = await fetch('https://api.github.com/users/pranavdaund');
    return responce.json()
}