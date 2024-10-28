import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {

    const {cartItems}=useCart()

  return (
    <>
    <div className='navSection'>
        <div className='title'>
            <Link to="/">
            <h2>GAR-mart</h2>
            </Link>
        </div>
        <div className='Search'>
            <input type='text' placeholder='Search...'/>
        </div>
        <div className='user'>
            <div className="user-detail">
                SignIN/SignUP
            </div>
            <Link to='/cart'>
            <div className='cart'>
                Cart 
                <span>
                    {cartItems.length}
                </span>
            </div>
            </Link>
        </div>      
    </div>
    <div className='subMenu'>
    <ul>
    <Link to='/AC'><li>AC</li></Link>
    <Link to='/Books'><li>Books</li></Link>
    <Link to='/Computers'><li>Computer</li></Link>
    <Link to='/Fridges'><li>Fridge</li></Link>
    <Link to='/Furniture'><li>Furniture</li></Link>
    <Link to='/Kitchen'><li>Kitchen</li></Link>
    <Link to='/Mobiles'><li>Mobile</li></Link>
    <Link to='/Men'><li>Men's</li></Link>
    <Link to='/Speakers'><li>Speakers</li></Link>
    <Link to='/TV'><li>TV's</li></Link>
    <Link to='/Woman'><li>Woman</li></Link>
    <Link to='/Watch'><li>Watches</li></Link>
    </ul>
    </div>
    </>
)
}

export default Navbar
