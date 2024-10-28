import React from 'react'
import { fridgeData } from '../data/fridge'

const Fridge = () => {
    const firstFiveImages = fridgeData.slice(0,5)
  return (
    <><div className='productTitle'><h2>Fridges</h2></div>
    <div className='productSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                <div className='imageBox'>
                    <img className='productImage' src={item.image} alt=""  />
                 </div>   
                )
            })
        }
      
    </div>
    </>
    )
}

export default Fridge
