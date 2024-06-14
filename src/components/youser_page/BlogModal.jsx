import React from 'react'
import ProfileContainer from '../blog/ProfileContainer'
import BlogContent from '../blog/BlogContent'

const BlogModal = ({modalOff}) => {
  return (
    <>
        <div  id='modal-container' className="hidden">

            <div onClick={modalOff} className="modal-photo">
                <img src={'/torii-gate.png'} alt="" className="modal-photo" height={300} width={300}/>
            </div>

            <div className="modal-author-content">
                <div className="author-profile">
                    <ProfileContainer />
                </div>

                <div className="author-blog-container">
                   <BlogContent />
                </div>

                <div className="reply-container">
                    <input type="text" className="reply-input" rows='4' />
                </div>

            </div>

            <div className="modal-reply-container">
                <ProfileContainer />

                <div className="reply-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti a neque, possimus quos veritatis earum dolorum in eligendi dolor perferendis et illo ex distinctio exercitationem tempora rerum quod impedit!
                </div>
            </div>

        </div>
    </>
  )
}

export default BlogModal