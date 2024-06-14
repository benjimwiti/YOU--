import React from 'react'

const ProfileHead = () => {
  return (
    <>
          <div className="youser">

            <div className="profile-pic-container">
              <img className='profile-pic' src={'../../../public/naruto-wallpaper-full-hd-1080p-396512.jpg'}  height={100} width={100}  />
            </div>

            <div className="description">
              <div className="account-name">*W*</div>
              <div className="yourser-name">Will Smith</div>
              <div className="total-posts">23</div>
              <div className="followers-count">7M</div>
              <div className="following-count">300</div>
            </div>

            <div className="follow-btn">
              follow
            </div>

          </div>
    </>
  )
}

export default ProfileHead