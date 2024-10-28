import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniture = () => {
    const firstFiveImages = furnitureData.slice(0,5)
  return (
    <><div className='productTitle'><h2>Furniture&more</h2></div>
    <div className='productSection'>
    {
        firstFiveImages.map((item)=>{
            return(
            <div className='imageBox'>
                <img className='productImage' src={item.image} alt="" />
            </div>
            )
        })
    }
      
    </div></>
  )
}

export default Furniture
