import React, { useContext, useRef, useEffect } from 'react'
import QuickContext from '../../context/quick/quickContext'
import { Form } from 'react-bootstrap'
const QuickFilter = () => {
  const quickContext = useContext(QuickContext)
  const text = useRef('')

  const { filterQuicks, clearFilter, filtered } = quickContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterQuicks(e.target.value)
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
          placeholder="Filter News or Quick..."
          onChange={onChange}
          autocomplete="off"
        />
      </Form.Group>
    </Form>
  )
}

export default QuickFilter
