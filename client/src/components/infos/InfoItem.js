import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import InfoContext from '../../context/info/infoContext'

const InfoItem = ({ info }) => {
  const infoContext = useContext(InfoContext)
  const { deleteInfo, setCurrent, clearCurrent } = infoContext

  const { _id, tag, title, link, value } = info

  const onDelete = () => {
    deleteInfo(_id)
    clearCurrent()
  }

  return (
    <div className="card mt-15">
      <div className="card-header">
        <span className="badge badge-primary">{tag.toUpperCase()}</span>
      </div>
      <div className="card-body">
        <p className="card-text">{title}</p>
        {value ? (
          <a href={link} className="btn btn-primary">
            {value}
          </a>
        ) : (
          ''
        )}
      </div>
      <div class="card-body">
        <button
          className="card-link btn btn-dark"
          onClick={() => setCurrent(info)}
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

InfoItem.propTypes = {
  info: PropTypes.object.isRequired,
}

export default InfoItem
