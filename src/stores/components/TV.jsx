import React from 'react'
import { tvData } from '../data/tv'

const TV = () => {
    const firstFiveImages = tvData.slice(0,5)
  return (
    <><div className='productTitle'><h2>TV</h2></div>
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

export default TV
