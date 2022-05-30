import React from 'react'


const BasketItem = (props) => {

  const itemsPrice = (props.itemPrice * props.count).toFixed(2)

  return (
    <div className='basket-item-container'>
      <img className='basket-item-img' alt={props.itemName} src={props.image} />
      <div>
        <p className='basket-item-name'>{props.itemName}</p>
        <div className='basket-item-counter-container'>
          <div>
            <button onClick={ () => props.removeItem(props.index)}>-</button>
            <span>{props.count} vnt.</span>
            <button onClick={ () => props.addItem(props.index)}>+</button>
          </div>
          <p id='basket-item-price'>
            € {itemsPrice}
          </p>
        </div>
      </div>

    </div>
  )
}

export default BasketItem