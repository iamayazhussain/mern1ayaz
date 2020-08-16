import React, { useReducer } from 'react'
import axios from 'axios'
import SyllabContext from './syllabContext'
import syllabReducer from './syllabReducer'
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

const SyllabState = (props) => {
  const initialState = {
    syllabs: null,
    current: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(syllabReducer, initialState)

  // Get cyllab
  const getSyllabs = async () => {
    try {
      const res = await axios.get('/api/syllabs')

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

  // Add Cyllab
  const addSyllab = async (syllab) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/syllabs', syllab, config)

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

  // Delete Cyllab
  const deleteSyllab = async (id) => {
    try {
      await axios.delete(`/api/syllabs/${id}`)

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

  // Update Cyllab
  const updateSyllab = async (syllab) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.put(`/api/syllabs/${syllab._id}`, syllab, config)

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

  // Clear Cyllabs
  const clearSyllabs = () => {
    dispatch({ type: CLEAR_DATAS })
  }

  // Set Current Cyllab
  const setCurrent = (syllab) => {
    dispatch({ type: SET_CURRENT, payload: syllab })
  }

  // Clear Current Cyllab
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Filter Cyllabs
  const filterSyllabs = (text) => {
    dispatch({ type: FILTER_DATAS, payload: text })
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <SyllabContext.Provider
      value={{
        syllabs: state.syllabs,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addSyllab,
        deleteSyllab,
        setCurrent,
        clearCurrent,
        updateSyllab,
        filterSyllabs,
        clearFilter,
        getSyllabs,
        clearSyllabs,
      }}
    >
      {props.children}
    </SyllabContext.Provider>
  )
}

export default SyllabState
