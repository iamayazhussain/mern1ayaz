import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import SidebarContext from '../../context/sidebar/sidebarContext'

const SidebarItem = ({ sidebar }) => {
  const sidebarContext = useContext(SidebarContext)
  const { deleteSidebar, setCurrent, clearCurrent } = sidebarContext

  const { _id, title, link, tag } = sidebar

  const onDelete = () => {
    deleteSidebar(_id)
    clearCurrent()
  }

  return (
    <div class="card mt-20">
      <div className="card-body">
        <h5 className="card-title ">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted uppercase">{tag}</h6>
        <p className="card-text">{link}</p>
        <button
          className="card-link btn btn-dark"
          onClick={() => setCurrent(sidebar)}
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

SidebarItem.propTypes = {
  sidebar: PropTypes.object.isRequired,
}

export default SidebarItem
