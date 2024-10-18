import React from 'react'
import Home from './Home'
import './App.css'
import { Nav } from 'react-bootstrap'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import UpdateProduct from './UpdateProduct'
import SignUp from './SignUp'
import Login from './Login'
import AddProduct from './AddProduct'

const App = () => {
    return (

        <div className='menu'>
            <div className="container">
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Home" element={<Home />} />
                    <Route exact path="/Products" element={<Products />} />
                    <Route exact path="/AddProduct" element={<AddProduct />} />
                    <Route exact path="/UpdateProduct" element={<UpdateProduct />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
