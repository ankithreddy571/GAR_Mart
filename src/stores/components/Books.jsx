import React from 'react'
import { booksData } from '../data/books'

const Books = () => {
    const firstFiveImages = booksData.slice(0,5)
  return (
    <><div className='productTitle'>
    <h2>Books</h2></div>
    <div className='productSection'>
        {
           
            firstFiveImages.map((item)=>{
                return(
                <div className='imageBox'>
                    <img className='productImage' src={item.image} alt=""/>
                </div>
                )})}
    </div>
    </>
  )
}

export default Books
