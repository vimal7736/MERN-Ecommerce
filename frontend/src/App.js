import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <main className='min-h-[calc(100vh-120px)]'>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
