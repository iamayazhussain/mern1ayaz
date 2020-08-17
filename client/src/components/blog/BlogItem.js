import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import BlogContext from '../../context/blog/blogContext'

const BlogItem = ({ blog }) => {
  const blogContext = useContext(BlogContext)
  const { deleteBlog, setCurrent, clearCurrent } = blogContext

  const { _id, img, title, descp, tag } = blog

  const onDelete = () => {
    deleteBlog(_id)
    clearCurrent()
  }

  return (
    <div class="card mt-20">
      <img class="card-img-top img-fluid" src={img} alt="Card  cap" />

      <div className="card-body">
        <h5 className="card-title ">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted uppercase">{tag}</h6>
        <p className="card-text">{descp}</p>
        <button className="card-link" onClick={() => setCurrent(blog)}>
          Edit
        </button>
        <button className="card-link" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
}

export default BlogItem
