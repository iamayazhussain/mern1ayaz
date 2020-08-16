import React, { useState, useContext, useEffect } from 'react'
import { Form, Col } from 'react-bootstrap'
import BlogContext from '../../context/blog/blogContext'

const BlogForm = () => {
  const blogContext = useContext(BlogContext)

  const { addBlog, updateBlog, clearCurrent, current } = blogContext

  useEffect(() => {
    if (current !== null) {
      setBlog(current)
    } else {
      setBlog({
        img: '',
        title: '',
        descp: '',
        dept: '',
        tag: [],
        link: '',
        value: '',
      })
    }
  }, [blogContext, current])

  const [blog, setBlog] = useState({
    img: '',
    title: '',
    descp: '',
    dept: '',
    tag: [],
    link: '',
    value: '',
  })

  const { img, title, descp, dept, tag, link, value } = blog

  const onChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (current === null) {
      addBlog(blog)
    } else {
      updateBlog(blog)
    }
    clearAll()
  }

  const clearAll = () => {
    clearCurrent()
  }

  return (
    <Form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? 'Edit Blog' : 'Add Blog'}</h2>

      <Form.Row>
        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Img Link"
            name="img"
            value={img}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Img Title"
            name="title"
            value={title}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Img Description"
            name="descp"
            value={descp}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>
        <div className="form-group col-md-6">
          <select
            id="inputState"
            class="form-control"
            name="dept"
            onChange={onChange}
          >
            <option selected>Choose...</option>
            <option value="cse">CSE</option>
            <option value="ce">CE</option>
            <option value="ece">ECE</option>
            <option value="eee">EEE</option>
            <option value="me">ME</option>
            <option value="it">IT</option>
            <option value="mba">MBA</option>
          </select>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="inbound"
            name="tag"
            onChange={onChange}
          />
          <label className="form-check-label" for="inlineCheckbox1">
            InBound
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="outbound"
            name="tag"
            onChange={onChange}
          />
          <label className="form-check-label" for="inlineCheckbox2">
            Outbound
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="sports"
            name="tag"
            onChange={onChange}
          />
          <label className="form-check-label" for="inlineCheckbox3">
            Sports
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="workshop"
            name="tag"
            onChange={onChange}
          />
          <label className="form-check-label" for="inlineCheckbox3">
            workshop
          </label>
        </div>

        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Img Link"
            name="link"
            value={link}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Img value"
            name="value"
            value={value}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>
        <div>
          <input
            type="submit"
            value={current ? 'Update Blog' : 'Add Blog'}
            className="btn btn-primary btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </Form.Row>
    </Form>
  )
}

export default BlogForm
