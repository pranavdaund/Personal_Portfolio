import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home, { githubinfoloader } from './Components/C_Home/Home'
import About from './Components/D_About/About'
import Contact from './Components/G_Contact/Contact'
import TechStack from './Components/E_TechStack/TechStack'
import Project from './Components/F_Projects/Project'
import Demo from './Components/Demo/Demo'
import Demo2 from './Components/Demo/Demo2'
import Profile from './Components/Profiles/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} loader={githubinfoloader} />
      <Route path='about' element={<About />} />
      <Route path='techstack' element={<TechStack />} />
      <Route path='project' element={<Project />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='demo' element={<Demo />} />
      <Route path='demo2' element={<Demo2 />} /> */}
      <Route path='profile' element={<Profile />} />


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
