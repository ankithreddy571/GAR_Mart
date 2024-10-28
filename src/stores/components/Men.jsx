import React from 'react'
import { menData } from '../data/men'

const Men = () => {
    const firstFiveImages = menData.slice(0,5)
  return (
    <><div className='productTitle'><h2>Men</h2></div>
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
    </div>
    </>
  )
}

export default Men
