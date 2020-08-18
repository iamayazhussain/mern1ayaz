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
        infos: action.payload,
        loading: false,
      }
    case ADD_DATA:
      return {
        ...state,
        infos: [action.payload, ...state.infos],
        loading: false,
      }
    case UPDATE_DATA:
      return {
        ...state,
        infos: state.infos.map((info) =>
          info._id === action.payload._id ? action.payload : info,
        ),
        loading: false,
      }
    case DELETE_DATA:
      return {
        ...state,
        infos: state.infos.filter((info) => info._id !== action.payload),
        loading: false,
      }
    case CLEAR_DATAS:
      return {
        ...state,
        infos: null,
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
        filtered: state.infos.filter((info) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return info.title.match(regex) || info.title.match(regex)
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
