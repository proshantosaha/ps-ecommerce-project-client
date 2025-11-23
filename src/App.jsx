import React from 'react'
import Navber from './components/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
     <Navber/>
     <main className='min-h-screen'>
           <Outlet/>

     </main>
     <Footer/>
    </>
  
  )
}

export default App