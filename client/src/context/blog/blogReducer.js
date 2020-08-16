import {
  GET_DATAS,
  ADD_DATA,
  DELETE_DATA,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_DATA,
  FILTER_DATAS,
  CLEAR_FILTER,
  DATA_ERROR,
  CLEAR_DATAS,
} from '../types2'

export default (state, action) => {
  switch (action.type) {
    case GET_DATAS:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      }
    case ADD_DATA:
      return {
        ...state,
        blogs: [action.payload, ...state.blogs],
        loading: false,
      }
    case UPDATE_DATA:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog,
        ),
        loading: false,
      }
    case DELETE_DATA:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
        loading: false,
      }
    case CLEAR_DATAS:
      return {
        ...state,
        blogs: null,
        filtered: null,
        error: null,
        current: null,
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      }
    case FILTER_DATAS:
      return {
        ...state,
        filtered: state.blogs.filter((blog) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return (
            blog.tag.match(regex) ||
            blog.dept.match(regex) ||
            blog.title.match(regex)
          )
        }),
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      }
    case DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
