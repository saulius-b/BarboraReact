import React from 'react'
import AddToCartButton from '../ItemPlaceholder/AddToCartButton'


function Product(props) {  

  return (
    <div id='Product'>
      <div>
        <img id='img' alt={props.itemName} src={props.image} /> --- nepamirsk alt tago
        <div id='itemName'>{props.itemName}</div> --- jeigu cia pavadinimas ar butinai ji reik i div ideti? gal galima koki kita taga? nes reik stengtis kuo maziau prikurti divu, kad nebutu painu
        <div>
          <div id='itemExtras'>
            <span id='itemPrice'>€ {props.itemPrice}</span>
            <div id='extraPrice'>{props.extraPrice}</div> --- tas pats klausimas kaip ir su itemName
            <div id='pricePerUnit'>{props.pricePerUnit}</div> --- tas pats klausimas kaip ir su itemName
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


