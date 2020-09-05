import React, { useContext, useRef, useEffect } from 'react'
import PublicationContext from '../../context/publication/publicationContext'
import { Form } from 'react-bootstrap'
const PublicationFilter = () => {
  const publicationContext = useContext(PublicationContext)
  const text = useRef('')

  const { filterPublications, clearFilter, filtered } = publicationContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterPublications(e.target.value)
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
          placeholder="Filter Publications ..."
          onChange={onChange}
          autocomplete="off"
        />
      </Form.Group>
    </Form>
  )
}

export default PublicationFilter
