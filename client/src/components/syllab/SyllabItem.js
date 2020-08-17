import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import SyllabContext from '../../context/syllab/syllabContext'
import { Table } from 'react-bootstrap'

const SyllabItem = ({ syllab }) => {
  const syllabContext = useContext(SyllabContext)
  const { deleteSyllab, setCurrent, clearCurrent } = syllabContext

  const { _id, dept, sem, type, syllabus } = syllab

  const onDelete = () => {
    deleteSyllab(_id)
    clearCurrent()
  }

  return (
    <Table striped bordered hover>
      <tr>
        <td>{dept.toUpperCase()} </td>
        <td>{sem}</td>
        <td>{type.toUpperCase()}</td>
        <td>
          {syllabus ? (
            <a href={syllabus} target="_blank" rel="noopener noreferrer">
              View <i className="fa fa-eye" aria-hidden="true"></i>
            </a>
          ) : (
            'No Link'
          )}
        </td>
        <td>
          <button
            className="btn btn-dark btn-sm"
            onClick={() => setCurrent(syllab)}
          >
            Edit
          </button>
        </td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>
            Delete
          </button>
        </td>
      </tr>
    </Table>
  )
}

SyllabItem.propTypes = {
  syllab: PropTypes.object.isRequired,
}

export default SyllabItem
