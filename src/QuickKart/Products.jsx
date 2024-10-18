import React, { useState } from 'react'

const Products = () => {

    const state = {
        productList: [
            {
                "productId": "P101",
                "productName": "Lamborghini Gallardo Spyder",
                "categoryId": 1,
                "price": 18000000,
                "quantityAvailable": 10
            },
            {
                "productId": "P102",
                "productName": "BMW X1",
                "categoryId": 1,
                "price": 3390000,
                "quantityAvailable": 10
            },
            {
                "productId": "P103",
                "productName": "BMW Z4",
                "categoryId": 1,
                "price": 6890000,
                "quantityAvailable": 10
            }
        ]
    }

    return (
        <div>
            <h1>Our wide range of Products</h1>

            <table className="table table-bordered table-striped">
                <thead className="thead-light">
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Category ID</th>
                        <th>Price</th>
                        <th>Quantity Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.productList.map((product) => {
                            return (
                                <tr>
                                    <td>{product.productId}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.categoryId}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantityAvailable}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Products
