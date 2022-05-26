import React from 'react'
import AddToCartButton from '../ItemPlaceholder/AddToCartButton'


function Product(props) {  

  return (
    <div id='Product'>
      <div>
        <img id='img' alt={props.itemName} src={props.image} />
        <div id='itemName'>{props.itemName}</div>
        <div>
          <div id='itemExtras'>
            <span id='itemPrice'>€ {props.itemPrice}</span>
            <div id='extraPrice'>{props.extraPrice}</div>
            <div id='pricePerUnit'>{props.pricePerUnit}</div>
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


