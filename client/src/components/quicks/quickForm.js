import React, { useState, useContext, useEffect } from 'react'
import QuickContext from '../../context/quick/quickContext'
import { Form, Col } from 'react-bootstrap'

const QuickForm = () => {
  const quickContext = useContext(QuickContext)

  const { addQuick, updateQuick, clearCurrent, current } = quickContext

  useEffect(() => {
    if (current !== null) {
      setQuick(current)
    } else {
      setQuick({
        tag: '',
        title: '',
        link: '',
      })
    }
  }, [quickContext, current])

  const [quick, setQuick] = useState({
    tag: '',
    title: '',
    link: '',
  })

  const { tag, title, link } = quick

  const onChange = (e) =>
    setQuick({ ...quick, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (current === null) {
      addQuick(quick)
    } else {
      updateQuick(quick)
    }
    clearAll()
  }

  const clearAll = () => {
    clearCurrent()
  }

  return (
    <Form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Quick Link' : 'Add Quick Link'}
      </h2>

      <Form.Row>
        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={onChange}
            autocomplete="off"
          />
        </Form.Group>

        <Form.Group as={Col} md={6} controlId="">
          <Form.Control
            type="text"
            placeholder="News Link"
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
            <option value="topalert">Top Alert</option>
            <option value="news">News</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value={current ? 'Update Quick Link' : 'Quick Link'}
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

export default QuickForm
