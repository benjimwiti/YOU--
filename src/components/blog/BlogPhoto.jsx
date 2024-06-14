import React from 'react'

const BlogPhoto = ({modalOn}) => {
  return (
    <>
       <div className="blog-photo">
                <img onClick={modalOn}src={'/torii-gate.png'} alt="Vite logo" height={200} />
        </div> 
    </>
  )
}

export default BlogPhoto