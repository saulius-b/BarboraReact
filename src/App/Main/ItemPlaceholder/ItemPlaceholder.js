import React from 'react'
import Products from '../ItemPlaceholder/Products'


const ItemPlaceholder = ({productList, addToCart, addItem, removeItem}) => {
  return (
    <div className='item-placeholder'>
      <section className='item-filter'>Filter</section>
      <Products productList={productList} addToCart={addToCart} addItem={addItem} removeItem={removeItem}/>
      <section id='item-page-select'>PageSelect</section>
    </div>
  )
}

export default ItemPlaceholder



