import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

let initailState={
  isLoading:false,
  cart:cartItems,
  total:0,
  amount:0
}





const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer( reducer,initailState)

const clearCart=()=>{
   dispatch({type:'CLEAR_CART'})
}
const removeSingleItem=(id)=>{
  dispatch({type:'REMOVE_SINGLE',payload:id})
}

const increase=(id)=>{
  dispatch({type:'INCREASE',payload:id})
}
const decrease=(id)=>{
  dispatch({type:'DECREASE',payload:id})
}

const fetchData=async()=>{
  dispatch({type:'LOADING'})
  try {
    const resoponse=await fetch(url)
  const data=await resoponse.json()
  dispatch({type:'FETCHED_DATA',payload:data})
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
  fetchData()
},[])


useEffect(()=>{
dispatch({type:'TOTAL_CART'})
},[state.cart])
  return (
    <AppContext.Provider
      value={{
       ...state,clearCart,removeSingleItem,decrease,increase
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
