import React from 'react'
import { BrowserRouter, Routes as ReactRoute, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/detailProduct'
import ChooseCategory from './pages/chooseCategory'
import Cart from './pages/Cart'
export default function Router () {
  return (
    <BrowserRouter>
      <ReactRoute>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<ProductDetail />} />
        <Route path='/CreateNft' element={<ChooseCategory />} />
        <Route path='/Cart' element={<Cart />} />
      </ReactRoute>
    </BrowserRouter>
  )
}
