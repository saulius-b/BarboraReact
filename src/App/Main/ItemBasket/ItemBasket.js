import React from 'react'
import BasketItem from '../ItemBasket/BasketItem'



const ItemBasket = ({productList, addItem, removeItem, totalPrice}) => {

  const basketItem = productList.map((item, index) => (
  item.addToCart && item.count > 0 && 
    <BasketItem key={item.id} index={index} image={item.image} itemName={item.itemName} itemPrice={item.itemPrice} count={item.count} addItem={addItem} removeItem={removeItem} />
  ))

  

  return (
    <aside className='basket'>
      {basketItem}    
      <div>{totalPrice.toFixed(2)}</div>
    </aside>
  )
}

export default ItemBasket