import React from 'react'

const Bloggers = () => {
  return (
    <>
      <section className="yousers-list">

        <div className="youser">
          <div className="profile-pic">
            <img src={viteLogo} alt="Vite logo" height={100} width={100} />
          </div>

          <div className="description">
            <div className="account-name">*W*</div>
            <div className="yourser-name">Will Smith</div>
          </div>

          <div className="follow-btn">
            follow
          </div>
          
        </div> 
      </section>
    </>
  )
}

export default Bloggers