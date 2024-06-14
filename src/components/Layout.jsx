import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const layout = () => {
  return (
    <>
      <section className="body">
        <Header />

            <Outlet />

      </section>
        <Footer />
    </>
  )
}

export default layout