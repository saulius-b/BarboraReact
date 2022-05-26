import React from 'react'

function BasketBottom({ productList, totalPrice }) { --- gali komentara parasyti, ka cia dar nori padaryti, nes daug vietos palikai. Ir arrow function

  


  return (
    <div>{totalPrice.toFixed(2)}</div>
  )
}

export default BasketBottom
