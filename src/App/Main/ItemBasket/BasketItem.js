import React from 'react'


const BasketItem = (props) => {

  const itemsPrice = (props.itemPrice * props.count).toFixed(2)

  return (
    <div id='BasketItem'>
      <img className='BasketImg' alt={props.itemName} src={props.image} />
      <div>
        <p id='BasketItemName'>{props.itemName}</p>
        <div id='ButtonRow'>
          <div>
            <button onClick={ () => props.removeItem(props.index)}>-</button>
            <span>{props.count} vnt.</span>
            <button onClick={ () => props.addItem(props.index)}>+</button>
          </div>
          <p id='BasketItemPrice'>
            € {itemsPrice}
          </p>
        </div>
      </div>

    </div>
  )
}

export default BasketItem