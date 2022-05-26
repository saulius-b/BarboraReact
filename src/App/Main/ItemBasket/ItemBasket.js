import React from 'react'
import BasketItem from '../ItemBasket/BasketItem'
import BasketBottom from '../ItemBasket/BasketBottom'


function ItemBasket({productList, addItem, removeItem, totalPrice}) { --- arrow function

  const basketItem = productList.map((item, index) => (
    item.addToCart && item.count > 0 && 
    <BasketItem key={item.id} index={index} image={item.image} itemName={item.itemName} itemPrice={item.itemPrice} count={item.count} addItem={addItem} removeItem={removeItem} />
  ))

  return (
    <aside id='ItemBasket'>
      {basketItem}    
      <BasketBottom productList={productList} totalPrice={totalPrice} />
    </aside>
  )
}

export default ItemBasket
