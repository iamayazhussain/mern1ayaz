import React, { useState, useContext, useEffect } from 'react'
import PlacementContext from '../../context/placement/placementContext'
import { Form, Col } from 'react-bootstrap'

const PlacementForm = () => {
  const placementContext = useContext(PlacementContext)

  const {
    addPlacement,
    updatePlacement,
    clearCurrent,
    current,
  } = placementContext

  useEffect(() => {
    if (current !== null) {
      setPlacement(current)
    } else {
      setPlacement({
        dept: '',
        title: '',
        journal: '',
        link: '',
      })
    }
  }, [placementContext, current])

  const [placement, setPlacement] = useState({
    dept: '',
    title: '',
    journal: '',
    link: '',
  })

  const { dept, title, journal, link } = placement

  const onChange = (e) =>
    setPlacement({ ...placement, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (current === null) {
      addPlacement(placement)
    } else {
      updatePlacement(placement)
    }
    clearAll()
  }

  const clearAll = () => {
    clearCurrent()
  }

  return (
    <Form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Placement' : 'Add Placement'}
      </h2>

      <Form.Row>
        <div className="form-group col-md-6">
          <select
            id="inputState"
            class="form-control"
            name="dept"
            value={dept}
            onChange={onChange}
          >
            <option selected>Choose...</option>
            <option value="cse">CSE</option>
            <option value="ce">CE</option>
            <option value="ece">ECE</option>
            <option value="eee">EEE</option>
            <option value="me">ME</option>
            <option value="it">IT</option>
            <option value="me">ME</option>
          </select>
        </div>
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
            placeholder="Journal"
            name="journal"
            value={journal}
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

        <div>
          <input
            type="submit"
            value={current ? 'Update Placement' : 'Add Placement'}
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

export default PlacementForm
