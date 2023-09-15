import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Store from '../Utility/Redux/Store'
import { Provider } from 'react-redux'

const Rootlayout = () => {
  return (
    <Provider store={Store}>
        <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      </Provider>
  )
}

export default Rootlayout
