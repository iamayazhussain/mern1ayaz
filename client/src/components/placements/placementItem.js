import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import PlacementContext from '../../context/placement/placementContext'

const PlacementItem = ({ placement }) => {
  const placementContext = useContext(PlacementContext)
  const { deletePlacement, setCurrent, clearCurrent } = placementContext

  const { _id, dept, title, journal, link } = placement

  const onDelete = () => {
    deletePlacement(_id)
    clearCurrent()
  }

  return (
    <div className="card mt-15">
      <div className="card-header">
        <span className="badge badge-primary">{dept.toUpperCase()}</span>
        {''} /{''}{' '}
        <span className="badge badge-default">{journal.toUpperCase()}</span>
      </div>
      <div className="card-body">
        <p className="card-text">
          {title}{' '}
          <a href={link}>
            <i className="fa fa-external-link" aria-hidden="true"></i>
          </a>
        </p>
      </div>
      <div class="card-body">
        <button
          className="card-link btn btn-dark"
          onClick={() => setCurrent(placement)}
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

PlacementItem.propTypes = {
  placement: PropTypes.object.isRequired,
}

export default PlacementItem
