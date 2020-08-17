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
        quicks: action.payload,
        loading: false,
      }
    case ADD_DATA:
      return {
        ...state,
        quicks: [action.payload, ...state.quicks],
        loading: false,
      }
    case UPDATE_DATA:
      return {
        ...state,
        quicks: state.quicks.map((quick) =>
          quick._id === action.payload._id ? action.payload : quick,
        ),
        loading: false,
      }
    case DELETE_DATA:
      return {
        ...state,
        quicks: state.quicks.filter((quick) => quick._id !== action.payload),
        loading: false,
      }
    case CLEAR_DATAS:
      return {
        ...state,
        quicks: null,
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
        filtered: state.quicks.filter((quick) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return quick.type.match(regex) || quick.title.match(regex)
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
