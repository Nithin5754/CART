


const reducer = (state,action) => {

if(action.type==='CLEAR_CART'){
    return {...state,cart:[]}
}
if(action.type==='REMOVE_SINGLE'){
     const updateCart=state.cart.filter((cart)=>cart.id!==action.payload)
     return {...state,cart:updateCart}
}
if(action.type==='INCREASE'){

  const getsingleProduct=state.cart.map((cartitem)=>{
      if(cartitem.id===action.payload){
      
      return {...cartitem,amount:cartitem.amount+1}
      }
 return cartitem
    
  })
  return {...state,cart:getsingleProduct}

}
if(action.type==='DECREASE'){
    const getsingleProduct=state.cart.map((cartItem)=>{

      if(action.payload===cartItem.id){
    
        return {...cartItem,amount:cartItem.amount-1}
      }
      return cartItem
    }).filter((cartItem)=>cartItem.amount !==0)
    return {...state,cart:getsingleProduct}
}

if(action.type==='TOTAL_CART'){
  let {total,amount}=state.cart.reduce((cartTotal,cartItem)=>{
  const {price,amount}=cartItem
  cartTotal.amount+=amount
  cartTotal.total+=price*amount
  return cartTotal
  },{total:0,amount:0})

total=parseFloat(total.toFixed(2))

  return {...state,total,amount}
  
}
if(action.type==='LOADING'){
  return {...state,isLoading:true}
}

if(action.type==='FETCHED_DATA'){

    return {...state,cart:action.payload,isLoading:false}
  .3
  
}

  return state
}
export default reducer