import React from 'react'
import Products from '../ItemPlaceholder/Products'


const ItemPlaceholder = ({productList, addToCart, addItem, removeItem}) => {
  return (
    <div id='ItemPlaceholder'>
      <section id='Filter'>Filter</section>
      <Products productList={productList} addToCart={addToCart} addItem={addItem} removeItem={removeItem}/>
      <section id='PageSelect'>PageSelect</section>
    </div>
  )
}

export default ItemPlaceholder



