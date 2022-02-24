import React, { useReducer } from 'react'
import axios from 'axios'
import PlacementContext from './placementContext'
import placementReducer from './placementReducer'
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

const PlacementState = (props) => {
  const initialState = {
    placements: null,
    current: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(placementReducer, initialState)

  // Get clacement
  const getPlacements = async () => {
    try {
      const res = await axios.get('/api/placements')

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

  // Add Clacement
  const addPlacement = async (placement) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/placements', placement, config)

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

  // Delete Clacement
  const deletePlacement = async (id) => {
    try {
      await axios.delete(`/api/placements/${id}`)

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

  // Update Clacement
  const updatePlacement = async (placement) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.put(
        `/api/placements/${placement._id}`,
        placement,
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

  // Clear Clacements
  const clearPlacements = () => {
    dispatch({ type: CLEAR_DATAS })
  }

  // Set Current Clacement
  const setCurrent = (placement) => {
    dispatch({ type: SET_CURRENT, payload: placement })
  }

  // Clear Current Clacement
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Filter Clacements
  const filterPlacements = (text) => {
    dispatch({ type: FILTER_DATAS, payload: text })
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <PlacementContext.Provider
      value={{
        placements: state.placements,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addPlacement,
        deletePlacement,
        setCurrent,
        clearCurrent,
        updatePlacement,
        filterPlacements,
        clearFilter,
        getPlacements,
        clearPlacements,
      }}
    >
      {props.children}
    </PlacementContext.Provider>
  )
}

export default PlacementState
