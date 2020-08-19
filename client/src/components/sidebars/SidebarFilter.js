import React, { useContext, useRef, useEffect } from 'react'
import SidebarContext from '../../context/sidebar/sidebarContext'
import { Form } from 'react-bootstrap'
const SidebarFilter = () => {
  const sidebarContext = useContext(SidebarContext)
  const text = useRef('')

  const { filterSidebars, clearFilter, filtered } = sidebarContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterSidebars(e.target.value)
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
          placeholder="Filter Sidebars..."
          onChange={onChange}
          autocomplete="off"
        />
      </Form.Group>
    </Form>
  )
}

export default SidebarFilter
