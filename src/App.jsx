import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'
import ACPage from './stores/pages/ACPage'
import BooksPage from './stores/pages/BooksPage'
import ComputersPage from './stores/pages/ComputersPage'
import FridgePage from './stores/pages/FridgePage'
import KitchenPage from './stores/pages/KitchenPage'
import MenPage from './stores/pages/MenPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import TVPage from './stores/pages/TVPage'
import WomanPage from './stores/pages/WomanPage'
import WatchPage from './stores/pages/WatchPage'
import FurniturePage from './stores/pages/FurniturePage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import ACSingle from './singles/ACSingle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>    
        <Route path='/Mobiles' element={<MobilePage/>}/>
        <Route path='/AC' element={<ACPage/>}/>
        <Route path='/Books' element={<BooksPage/>}/>
        <Route path="/Computers" element={<ComputersPage/>}/>
        <Route path="/Fridges" element={<FridgePage/>}/>
        <Route path="/Kitchen" element={<KitchenPage/>}/>
        <Route path="/Men" element={<MenPage/>}/>
        <Route path="/Furniture" element={<FurniturePage/>}/>
        <Route path="/Speakers" element={<SpeakerPage/>}/>
        <Route path="/TV" element={<TVPage/>}/>
        <Route path="/Woman" element={<WomanPage/>}/>
        <Route path="/Watch" element={<WatchPage/>}/>
        <Route path="/mobiles/:id" element={<MobileSingle/>}/>
        <Route path="/ac/:id" element={<ACSingle/>}/>
        <Route path="/cart" element = {<UserCart/>}/>
      </Routes>
    </div>
  )
}

export default App
