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
        publications: action.payload,
        loading: false,
      }
    case ADD_DATA:
      return {
        ...state,
        publications: [action.payload, ...state.publications],
        loading: false,
      }
    case UPDATE_DATA:
      return {
        ...state,
        publications: state.publications.map((publication) =>
          publication._id === action.payload._id ? action.payload : publication,
        ),
        loading: false,
      }
    case DELETE_DATA:
      return {
        ...state,
        publications: state.publications.filter(
          (publication) => publication._id !== action.payload,
        ),
        loading: false,
      }
    case CLEAR_DATAS:
      return {
        ...state,
        publications: null,
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
        filtered: state.publications.filter((publication) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return (
            publication.title.match(regex) || publication.title.match(regex)
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
