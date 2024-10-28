import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0,5)
  return (<a><div className='productTitle'><h2>Kitchen</h2></div>
    <div className='productSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                <div className='imageSection'>
                    <img className='productImage' src={item.image} alt="" />
                </div>
                )
            })
        }
      
    </div>
    </a>
  )
}

export default Kitchen
