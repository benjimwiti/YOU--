import React from 'react'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { format } from 'date-fns'

const CreateBlog = () => {

  const [blogTitle, setBlogTitle] = useState('')
  const [blogText , setBlogText] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState([])
  const tagsDisplay = tags.map((tag) => `${tag} | `)

  function handleSaveTag (e) {
    if(e.key !== 'Enter') return

    const tag = tagInput.trim()

    if(tag) {
      setTags(tags => [...tags, tag])
      setTagInput('')
  } else {
    alert('Please enter a valid tag')
  }
}

  function createNewPostFn() {
    const now = format( new Date(), "yyyy-MM-dd HH:mm:ss")
    const newPost = {
      title: blogTitle,
      text: blogText,
      tags: tags,
      authorId: 10000001,
      createdAt: now
    }
  }


  return (
    <>
       <div className="create-blog-container">

            <div className="input-wrapper" >
                <label htmlFor="blog-title">Blog Title</label>
                <input type="text" id="blog-title" placeholder="blog-title" value={blogTitle} onChange={(event) => {
                    setBlogTitle(event.target.value)
                } } />
            </div>

            <div className="input-wrapper">
                <label htmlFor="blog-text">What's on your mind?</label>
                {/* <ReactQuill theme="snow" value={blogText} onChange={event => setBlogText(event.target.value)} /> */}
                <textarea 
                  type="text" 
                  placeholder="blog-text" 
                  rows="10" 
                  cols="30" 
                  onChange={(event) => {
                    setBlogText(event.target.value)
                  }} 
                  value={blogText}
                  style={{
                    fontFamily:'Roboto',
                    padding: '0.5rem'
                  }}
                />
            </div>

            <div className="input-wrapper tag">
                <label 
                    htmlFor="tags">
                        tag
                </label>
                
                <input 
                    id="tags"
                    type="text" 
                    className="tag-box" 
                    value={tagInput}
                    onChange={event => setTagInput(event.target.value)}
                    placeholder= "single tag then enter to save"
                    onKeyDown={handleSaveTag}    
                />

            </div>
                <div className="tag-display">
                    { tagsDisplay}
                </div>

            <button className="submit-post" onClick={createNewPostFn}>post</button>
        </div>
    </>
  )
}

export default CreateBlog