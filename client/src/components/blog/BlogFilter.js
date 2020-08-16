import React, { useContext, useRef, useEffect } from 'react'
import BlogContext from '../../context/blog/blogContext'
import { Form } from 'react-bootstrap'
const BlogFilter = () => {
  const blogContext = useContext(BlogContext)
  const text = useRef('')

  const { filterBlogs, clearFilter, filtered } = blogContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterBlogs(e.target.value)
    } else {
      clearFilter()
    }
  }

  return (
    <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Control
          ref={text}
          type="text"
          placeholder="Filter Blog Post..."
          onChange={onChange}
          autocomplete="off"
        />
      </Form.Group>
    </Form>
  )
}

export default BlogFilter
