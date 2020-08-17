import React, { useReducer } from 'react'
import axios from 'axios'
import QuickContext from './quickContext'
import quickReducer from './quickReducer'
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

const QuickState = (props) => {
  const initialState = {
    quicks: null,
    current: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(quickReducer, initialState)

  // Get cuick
  const getQuicks = async () => {
    try {
      const res = await axios.get('/api/quicks')

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

  // Add Cuick
  const addQuick = async (quick) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/quicks', quick, config)

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

  // Delete Cuick
  const deleteQuick = async (id) => {
    try {
      await axios.delete(`/api/quicks/${id}`)

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

  // Update Cuick
  const updateQuick = async (quick) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.put(`/api/quicks/${quick._id}`, quick, config)

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

  // Clear Cuicks
  const clearQuicks = () => {
    dispatch({ type: CLEAR_DATAS })
  }

  // Set Current Cuick
  const setCurrent = (quick) => {
    dispatch({ type: SET_CURRENT, payload: quick })
  }

  // Clear Current Cuick
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Filter Cuicks
  const filterQuicks = (text) => {
    dispatch({ type: FILTER_DATAS, payload: text })
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <QuickContext.Provider
      value={{
        quicks: state.quicks,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addQuick,
        deleteQuick,
        setCurrent,
        clearCurrent,
        updateQuick,
        filterQuicks,
        clearFilter,
        getQuicks,
        clearQuicks,
      }}
    >
      {props.children}
    </QuickContext.Provider>
  )
}

export default QuickState
