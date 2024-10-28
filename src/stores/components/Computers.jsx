import React from 'react'
import { computerData } from '../data/computers'

const Computers = () => {
    const firstFiveImages=computerData.slice(0,5)
  return (
    <><div className='productTitle'>
    <h2>
        Computers
    </h2></div>
    <div className='productSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imageBox'>
                    <img className='productImage' img src={item.image} alt="" />               
                    </div>
                )
            })
        }
        </div>     
    </>
    
  )
}

export default Computers
