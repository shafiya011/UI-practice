import React from 'react'
import { useSelector } from 'react-redux'

const FakeShopPeoductComp = () => {
  const products =useSelector(state=>state.allproducts.product)

  console.log(products);
  return (
    <div className='four column wide'>
      <div className='ui link cards'>
      <div className='card'>
        <div className='image'></div>
        <div className='content '>
        <div className='header  '>hello</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default FakeShopPeoductComp
