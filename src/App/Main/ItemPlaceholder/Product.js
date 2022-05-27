import React from 'react'
import AddToCartButton from '../ItemPlaceholder/AddToCartButton'


const Product = (props) => {  

  return (
    <div id='Product'>
      <div>
        <img id='img' alt={props.itemName} src={props.image} />
        <p id='itemName'>{props.itemName}</p>
        <div>
          <div id='itemExtras'>
            <span id='itemPrice'>€ {props.itemPrice}</span>
            <p id='extraPrice'>{props.extraPrice}</p>
            <p id='pricePerUnit'>{props.pricePerUnit}</p>
          </div>
        </div>
      </div>
      <div id='buttonPlaceholder'>
        <AddToCartButton addToCart={props.addToCart} addItem={props.addItem} removeItem={props.removeItem} index={props.index} count={props.count}/>
      </div>
    </div>
  )
}

export default Product


