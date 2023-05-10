import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'

const Layout = ({children}) => {
  return (
   <React.Fragment>
    <Navbar/>
    <main>
        {children}
    </main>
    <Footer/>
   </React.Fragment>
  )
}

export default Layout