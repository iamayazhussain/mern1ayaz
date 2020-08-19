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
        sidebars: action.payload,
        loading: false,
      }
    case ADD_DATA:
      return {
        ...state,
        sidebars: [action.payload, ...state.sidebars],
        loading: false,
      }
    case UPDATE_DATA:
      return {
        ...state,
        sidebars: state.sidebars.map((sidebar) =>
          sidebar._id === action.payload._id ? action.payload : sidebar,
        ),
        loading: false,
      }
    case DELETE_DATA:
      return {
        ...state,
        sidebars: state.sidebars.filter(
          (sidebar) => sidebar._id !== action.payload,
        ),
        loading: false,
      }
    case CLEAR_DATAS:
      return {
        ...state,
        sidebars: null,
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
        filtered: state.sidebars.filter((sidebar) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return sidebar.tag.match(regex) || sidebar.title.match(regex)
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
