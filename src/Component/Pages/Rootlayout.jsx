import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Store from '../Utility/Redux/Store'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import NavFile from '../Navbar/Nav/NavFile'

const Rootlayout = () => {
  return (
    <Provider store={Store}>
        <NavFile/>
      <main>
      <ToastContainer/>
        <Outlet/>
      </main>
      <Footer/>
      </Provider>
  )
}

export default Rootlayout
