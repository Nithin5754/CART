


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
if(action.type==='TOGGLE_BTN'){
    let updateCart=state.cart.map((car)=>{
 
      if(car.id===action.payload.id){
        console.log(action.payload.id,"id found");
        if(action.payload.type==='inc'){
          console.log("inc");
          return {...car,amount:car.amount+1}
        }else if(action.payload.type==='desc'){
          console.log("desc");
          return {...car,amount:car.amount-1}
        }
      }
      return car
    }).filter((cartItem)=>cartItem.amount !==0)
    return {...state,cart:updateCart}
}

  return state
}
export default reducer