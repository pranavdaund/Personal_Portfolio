import React from 'react';

import Header from './Components/A_Header/Header1/Header'
import Footer from './Components/B_Footer/Footer1/Footer'
import Header2 from './Components/A_Header/Header2/Header2'
import Footer2 from './Components/B_Footer/Footer2/Footer2'
import { Outlet } from 'react-router-dom'
// import Header2 from './Components/AA_Header/Header2';
// import Footer2 from './Components/AA_Header/Footer2';


function Layout() {
    return (
        <>

            <Header2 />
            <Outlet />
            <Footer2 />


        </>
    )
}

export default Layout

// https://play.tailwindcss.com/YRZME0pmDm