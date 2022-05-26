import React from 'react'

function BasketBottom({ productList, totalPrice }) {

  


  return (
    <div>{totalPrice.toFixed(2)}</div>
  )
}

export default BasketBottom