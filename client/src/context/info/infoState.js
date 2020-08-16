import React, { useReducer } from 'react'
import axios from 'axios'
import InfoContext from './infoContext'
import infoReducer from './infoReducer'
import {
  GET_DATAS,
  ADD_DATA,
  DELETE_DATA,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_DATA,
  FILTER_DATAS,
  CLEAR_DATAS,
  CLEAR_FILTER,
  DATA_ERROR,
} from '../types2'

const InfoState = (props) => {
  const initialState = {
    infos: null,
    current: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(infoReducer, initialState)

  // Get cnfo
  const getInfos = async () => {
    try {
      const res = await axios.get('/api/infos')

      dispatch({
        type: GET_DATAS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
        payload: err.response.msg,
      })
    }
  }

  // Add Cnfo
  const addInfo = async (info) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/infos', info, config)

      dispatch({
        type: ADD_DATA,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
        payload: err.response.msg,
      })
    }
  }

  // Delete Cnfo
  const deleteInfo = async (id) => {
    try {
      await axios.delete(`/api/infos/${id}`)

      dispatch({
        type: DELETE_DATA,
        payload: id,
      })
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
        payload: err.response.msg,
      })
    }
  }

  // Update Cnfo
  const updateInfo = async (info) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.put(`/api/infos/${info._id}`, info, config)

      dispatch({
        type: UPDATE_DATA,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
        payload: err.response.msg,
      })
    }
  }

  // Clear Cnfos
  const clearInfos = () => {
    dispatch({ type: CLEAR_DATAS })
  }

  // Set Current Cnfo
  const setCurrent = (info) => {
    dispatch({ type: SET_CURRENT, payload: info })
  }

  // Clear Current Cnfo
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Filter Cnfos
  const filterInfos = (text) => {
    dispatch({ type: FILTER_DATAS, payload: text })
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <InfoContext.Provider
      value={{
        infos: state.infos,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addInfo,
        deleteInfo,
        setCurrent,
        clearCurrent,
        updateInfo,
        filterInfos,
        clearFilter,
        getInfos,
        clearInfos,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  )
}

export default InfoState
