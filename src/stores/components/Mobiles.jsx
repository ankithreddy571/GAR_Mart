import React from 'react'
import { mobileData } from '../data/mobiles'

const Mobiles = () => {
    const firstFiveImages = mobileData.slice(0,5)
  return (
    <><div className='productTitle'>
    <h2>Mobiles</h2></div>
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

export default Mobiles
