import React, { useReducer } from 'react'
import axios from 'axios'
import SidebarContext from './sidebarContext'
import sidebarReducer from './sidebarReducer'
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

const SidebarState = (props) => {
  const initialState = {
    sidebars: null,
    current: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(sidebarReducer, initialState)

  // Get cidebar
  const getSidebars = async () => {
    try {
      const res = await axios.get('/api/sidebars')

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

  // Add Cidebar
  const addSidebar = async (sidebar) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/sidebars', sidebar, config)

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

  // Delete Sidebar
  const deleteSidebar = async (id) => {
    try {
      await axios.delete(`/api/sidebars/${id}`)

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

  // Update Sidebar
  const updateSidebar = async (sidebar) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.put(
        `/api/sidebars/${sidebar._id}`,
        sidebar,
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

  // Clear Sidebars
  const clearSidebars = () => {
    dispatch({ type: CLEAR_DATAS })
  }

  // Set Current Sidebar
  const setCurrent = (sidebar) => {
    dispatch({ type: SET_CURRENT, payload: sidebar })
  }

  // Clear Current Sidebar
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Filter Sidebars
  const filterSidebars = (text) => {
    dispatch({ type: FILTER_DATAS, payload: text })
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <SidebarContext.Provider
      value={{
        sidebars: state.sidebars,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addSidebar,
        deleteSidebar,
        setCurrent,
        clearCurrent,
        updateSidebar,
        filterSidebars,
        clearFilter,
        getSidebars,
        clearSidebars,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  )
}

export default SidebarState
