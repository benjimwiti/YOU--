import React from 'react'

const YouserDetail = ({profilePic, accountName, youserName}) => {
  return (
    <>
      <div className="youser">

        <div className="profile-pic-container">
          <img className='profile-pic' src={ profilePic } alt="Vite logo" />
        </div>

        <div className="description">
          <div className="account-name"> { accountName } </div>
          <div className="youser-name"> { youserName } </div>
        </div>

        <div className="follow-btn">
          follow
        </div>

      </div>
    </>
  )
}

export default YouserDetail
