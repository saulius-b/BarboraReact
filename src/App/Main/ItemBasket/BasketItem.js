import React from 'react'


function BasketItem(props) {

  const itemsPrice = (props.itemPrice * props.count).toFixed(2)

  return (
    <div id='BasketItem'>
      <img className='BasketImg' alt={props.itemName} src={props.image} /> --- alt tago nepamirsk
      <div>
        <div id='BasketItemName'>{props.itemName}</div> --- ar tikrai cia reik divo?
        <div id='ButtonRow'>
          <div>
            <button onClick={ () => props.removeItem(props.index)}>-</button>
            <span>{props.count} vnt.</span>
            <button onClick={ () => props.addItem(props.index)}>+</button>
          </div>
          <div id='BasketItemPrice'> --- ar tikrai cia reik divo?
            € {itemsPrice}
          </div>
        </div>
      </div>

    </div>
  )
}

export default BasketItem
