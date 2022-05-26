import React from 'react'

function AddToCartButton(props) {

  const cartButton = <button className='Button' onClick={() => props.addToCart(props.index)}>Į krepšelį</button>

  const mutatedCartButton = <><button onClick={() => props.removeItem(props.index)}>-</button><span>{props.count} vnt.</span><button onClick={() => props.addItem(props.index)}>+</button></>

  const button = props.count === 0 ? cartButton : mutatedCartButton

  return (
    <>
      {button}
    </>
  )
}

export default AddToCartButton