import React, { useState, useContext, useEffect } from 'react'
import { Form, Col } from 'react-bootstrap'
import SidebarContext from '../../context/sidebar/sidebarContext'

const SidebarForm = () => {
  const sidebarContext = useContext(SidebarContext)

  const { addSidebar, updateSidebar, clearCurrent, current } = sidebarContext

  useEffect(() => {
    if (current !== null) {
      setSidebar(current)
    } else {
      setSidebar({
        title: '',
        link: '',
        tag: '',
      })
    }
  }, [sidebarContext, current])

  const [sidebar, setSidebar] = useState({
    title: '',
    link: '',
    tag: '',
  })

  const { title, link, tag } = sidebar

  const onChange = (e) =>
    setSidebar({ ...sidebar, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (current === null) {
      addSidebar(sidebar)
    } else {
      updateSidebar(sidebar)
    }
    clearAll()
  }

  const clearAll = () => {
    clearCurrent()
  }

  return (
    <Form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Sidebar' : 'Add Sidebar'}
      </h2>

      <Form.Row>
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
            placeholder="Link"
            name="link"
            value={link}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <div className="form-group col-md-6">
          <select
            id="inputState"
            class="form-control"
            name="tag"
            value={tag}
            onChange={onChange}
          >
            <option selected>Choose...</option>
            <option value="academics">Academics</option>
            <option value="cse">CSE</option>
            <option value="ce">CE</option>
            <option value="ece">ECE</option>
            <option value="eee">EEE</option>
            <option value="me">ME</option>
            <option value="it">IT</option>
            <option value="mba">MBA</option>
            <option value="events">Events</option>
            <option value="research">Research</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value={current ? 'Update Sidebar' : 'Add Sidebar'}
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

export default SidebarForm
