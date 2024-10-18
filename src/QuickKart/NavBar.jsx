import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="limit-height">
            <nav class="navbar navbar-expand-lg navbar-fixed-top">
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                <h4 className="navlink-color unifying-font">Home</h4>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Products">
                                <h4 className="navlink-color unifying-font">All Products</h4>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/AddProduct">
                                <h4 className="navlink-color unifying-font">Add Product</h4>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/UpdateProduct">
                                <h4 className="navlink-color unifying-font">Update Product</h4>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default NavBar
