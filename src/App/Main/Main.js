import ItemBasket from '../Main/ItemBasket/ItemBasket'
import ItemPlaceholder from '../Main/ItemPlaceholder/ItemPlaceholder'
import Menu from '../Main/Menu'
import React, { useState, useEffect } from 'react'
import itemList from '../../itemList.json'

function Main() {

  useEffect(() => {
    itemList.forEach(item => item.addToCart = false)
  }, [])


  const [productList, setProductList] = useState(itemList)

  const [totalPrice, setTotalPrice] = useState(0)


  const addToCart = (index) => {

    const newProductList = [...productList]

    if (newProductList[index].addToCart === false) {

      (newProductList[index].addToCart = true) && (newProductList[index].count = 1)

      setTotalPrice(prevCount => prevCount + newProductList[index].itemPrice)

      setProductList(newProductList)

    }

  }

  const addItem = (index) => {

    const newProductList = [...productList]

    newProductList[index].count = newProductList[index].count + 1

    setProductList(newProductList)

    setTotalPrice(prevCount => prevCount + newProductList[index].itemPrice)

  }

  const removeItem = (index) => {

    const newProductList = [...productList]

    newProductList[index].count = newProductList[index].count - 1

    if (newProductList[index].count === 0) {

      newProductList[index].addToCart = false

    }

    setProductList(newProductList)

    setTotalPrice(prevCount => prevCount - newProductList[index].itemPrice)

  }









  return (
    <main id="Main">
      <Menu />
      <ItemPlaceholder productList={productList} addToCart={addToCart} addItem={addItem} removeItem={removeItem} />
      <ItemBasket productList={productList} totalPrice={totalPrice} addItem={addItem} removeItem={removeItem} />
    </main>
  )
}

export default Main