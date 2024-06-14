import React from 'react'
import BlogPhoto from '../blog/BlogPhoto'
import BlogModal from './BlogModal'

const ProfileBody = () => {

  
  const modalOn = () => {
    console.log('click')
    document.querySelector('#modal-container').className = 'modal-container'
  };
  const modalOff = () => {
    console.log('click')
    document.querySelector('#modal-container').className = 'hidden'
  }

  

  return (
    <>
      <section className="profile-blogs-display">
        <div className="user-profile-menu">
          <h1>POSTS</h1>
        </div>

        <div className="profile-blog-container">
          <BlogPhoto modalOn={modalOn} />
          <BlogModal modalOff={modalOff} />
        </div>
      </section>
        
    </>
  )
}

export default ProfileBody