import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import QuickContext from '../../context/quick/quickContext'

const QuickItem = ({ quick }) => {
  const quickContext = useContext(QuickContext)
  const { deleteQuick, setCurrent, clearCurrent } = quickContext

  const { _id, tag, title, link } = quick

  const onDelete = () => {
    deleteQuick(_id)
    clearCurrent()
  }

  return (
    <div className="card mt-15">
      <div className="card-header">
        <span className="badge badge-primary">
          {tag === 'news' ? 'News' : 'Top Alert'}
        </span>
      </div>
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
      <div class="card-body">
        <button
          className="card-link btn btn-dark"
          onClick={() => setCurrent(quick)}
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

QuickItem.propTypes = {
  quick: PropTypes.object.isRequired,
}

export default QuickItem
