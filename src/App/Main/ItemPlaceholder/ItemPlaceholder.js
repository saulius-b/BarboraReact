
import React from 'react'
import Filter from '../ItemPlaceholder/Filter'
import Products from '../ItemPlaceholder/Products'
import PageSelect from '../ItemPlaceholder/PageSelect'

function ItemPlaceholder({productList, addToCart, addItem, removeItem}) {
  return (
    <div id='ItemPlaceholder'>
      <Filter />
      <Products productList={productList} addToCart={addToCart} addItem={addItem} removeItem={removeItem}/>
      <PageSelect />
    </div>
  )
}

export default ItemPlaceholder



