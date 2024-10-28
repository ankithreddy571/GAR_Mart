import React from 'react'
import { speakerData } from '../data/speaker'

const Speaker = () => {
    const firstFiveImages = speakerData.slice(0,5)
  return (   
    <><div className='productTitle'><h2>Speakers</h2></div>
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

export default Speaker
