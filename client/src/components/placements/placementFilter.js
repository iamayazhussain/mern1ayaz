import React, { useContext, useRef, useEffect } from 'react'
import PlacementContext from '../../context/placement/placementContext'
import { Form } from 'react-bootstrap'
const PlacementFilter = () => {
  const placementContext = useContext(PlacementContext)
  const text = useRef('')

  const { filterPlacements, clearFilter, filtered } = placementContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterPlacements(e.target.value)
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
          placeholder="Filter Placements ..."
          onChange={onChange}
          autocomplete="off"
        />
      </Form.Group>
    </Form>
  )
}

export default PlacementFilter
