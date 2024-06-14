import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import HomeBlog from '../components/home_views/HomeBlog'

function Home() {

  return (
    <>
        
        <div className="blog-list">
          
          <HomeBlog /> 

        </div>

    </>
  )
}

export default Home
