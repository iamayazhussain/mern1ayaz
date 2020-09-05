import React, { useReducer } from 'react'
import axios from 'axios'
import PublicationContext from './publicationContext'
import publicationReducer from './publicationReducer'
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

const PublicationState = (props) => {
  const initialState = {
    publications: null,
    current: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(publicationReducer, initialState)

  // Get cublication
  const getPublications = async () => {
    try {
      const res = await axios.get('/api/publications')

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

  // Add Cublication
  const addPublication = async (publication) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/publications', publication, config)

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

  // Delete Cublication
  const deletePublication = async (id) => {
    try {
      await axios.delete(`/api/publications/${id}`)

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

  // Update Cublication
  const updatePublication = async (publication) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.put(
        `/api/publications/${publication._id}`,
        publication,
        config,
      )

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

  // Clear Cublications
  const clearPublications = () => {
    dispatch({ type: CLEAR_DATAS })
  }

  // Set Current Cublication
  const setCurrent = (publication) => {
    dispatch({ type: SET_CURRENT, payload: publication })
  }

  // Clear Current Cublication
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Filter Cublications
  const filterPublications = (text) => {
    dispatch({ type: FILTER_DATAS, payload: text })
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <PublicationContext.Provider
      value={{
        publications: state.publications,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addPublication,
        deletePublication,
        setCurrent,
        clearCurrent,
        updatePublication,
        filterPublications,
        clearFilter,
        getPublications,
        clearPublications,
      }}
    >
      {props.children}
    </PublicationContext.Provider>
  )
}

export default PublicationState
