import React from 'react'
import { acData } from '../data/ac'

const AC = () => {
    const firstFiveImages = acData.slice(0,5)
  return (
    <><div className='productTitle'>
  <h2>AC</h2></div>
    <div className='productSection'>
      {
        firstFiveImages.map((item)=>{
            return(
                <div className='imageSection'>
                    <img className="productImage"src={item.image} alt=""/>
                </div>
            )
        })
      }
    </div>
    </>
    )
}

export default AC
