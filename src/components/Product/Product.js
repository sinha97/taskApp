import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({ title, price, image }) => {
    const history = useHistory();
    return (
        <div className="product">
            <div className="productInfo">
                <p className="productTitle">{title}</p>
                <img className="productImage"src={image} alt="" />
                <p className="product__price">
                    <span>Rs </span>
                    <strong>{price}</strong>
                </p>
            </div>
            <button onClick={() => history.push('/productpage')}>About Product</button>
        </div>
    )
}

export default Product;
