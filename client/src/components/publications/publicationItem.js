import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import PublicationContext from '../../context/publication/publicationContext'

const PublicationItem = ({ publication }) => {
  const publicationContext = useContext(PublicationContext)
  const { deletePublication, setCurrent, clearCurrent } = publicationContext

  const { _id, dept, title, journal, link } = publication

  const onDelete = () => {
    deletePublication(_id)
    clearCurrent()
  }

  return (
    <div className="card mt-15">
      <div className="card-header">
        <span className="badge badge-primary">{dept}</span>
      </div>
      <div className="card-body">
        <h5>
          <a href={link} className="fa fa-external-link" aria-hidden="true">
            {journal}
          </a>
        </h5>
        <p className="card-text">{title}</p>
      </div>
      <div class="card-body">
        <button
          className="card-link btn btn-dark"
          onClick={() => setCurrent(publication)}
        >
          Edit
        </button>
        <button className="card-link btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

PublicationItem.propTypes = {
  publication: PropTypes.object.isRequired,
}

export default PublicationItem
