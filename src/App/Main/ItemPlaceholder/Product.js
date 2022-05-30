import React from 'react'
import AddToCartButton from '../ItemPlaceholder/AddToCartButton'


const Product = (props) => {  

  return (
    <div className='products-item-container'>
      <div>
        <img className='products-item-img' alt={props.itemName} src={props.image} />
        <p className='products-item-name'>{props.itemName}</p>
        <div>
          <div className='products-item-extras'>
            <span className='products-item-price'>€ {props.itemPrice}</span>
            <p className='products-extra-price'>{props.extraPrice}</p>
            <p className='products-price-per-unit'>{props.pricePerUnit}</p>
          </div>
        </div>
      </div>
      <div className='products-button-container'>
        <AddToCartButton addToCart={props.addToCart} addItem={props.addItem} removeItem={props.removeItem} index={props.index} count={props.count}/>
      </div>
    </div>
  )
}

export default Product


