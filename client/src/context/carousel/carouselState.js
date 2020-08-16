import React, { useReducer } from 'react'
import axios from 'axios'
import CarouselContext from './carouselContext'
import carouselReducer from './carouselReducer'
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

const CarouselState = (props) => {
  const initialState = {
    carousels: null,
    current: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(carouselReducer, initialState)

  // Get carousel
  const getCarousels = async () => {
    try {
      const res = await axios.get('/api/carousels')

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

  // Add CAROUSEL
  const addCarousel = async (carousel) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/carousels', carousel, config)

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

  // Delete CAROUSEL
  const deleteCarousel = async (id) => {
    try {
      await axios.delete(`/api/carousels/${id}`)

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

  // Update CAROUSEL
  const updateCarousel = async (carousel) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.put(
        `/api/carousels/${carousel._id}`,
        carousel,
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

  // Clear CAROUSELs
  const clearCarousels = () => {
    dispatch({ type: CLEAR_DATAS })
  }

  // Set Current CAROUSEL
  const setCurrent = (carousel) => {
    dispatch({ type: SET_CURRENT, payload: carousel })
  }

  // Clear Current CAROUSEL
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Filter CAROUSELs
  const filterCarousels = (text) => {
    dispatch({ type: FILTER_DATAS, payload: text })
  }

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <CarouselContext.Provider
      value={{
        carousels: state.carousels,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addCarousel,
        deleteCarousel,
        setCurrent,
        clearCurrent,
        updateCarousel,
        filterCarousels,
        clearFilter,
        getCarousels,
        clearCarousels,
      }}
    >
      {props.children}
    </CarouselContext.Provider>
  )
}

export default CarouselState
