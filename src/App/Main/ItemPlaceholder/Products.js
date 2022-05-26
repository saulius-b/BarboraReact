import React from 'react'
import Product from '../ItemPlaceholder/Product'


function Products({ productList, addToCart, addItem, removeItem }) {

  const product = productList.map((item, index) => (
    <Product addToCart={addToCart} addItem={addItem} removeItem={removeItem} key={item.id} index={index} count={item.count} image={item.image} itemName={item.itemName} itemPrice={item.itemPrice} extraPrice={item.extraPrice} pricePerUnit={item.pricePerUnit} />
  ))

  return (
    <section id='Products'>
      {product}
    </section>
  )
}

export default Products