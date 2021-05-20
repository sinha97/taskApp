import React from 'react';
import './ProductPage.css';
import One from '../../productImage/Image1.jpeg';

const ProductPage = () => {
    return (
        <div className="product">
            <div className="productInfo">
                <p className="productTitle">Dell Laptop</p>
                <img className="productImage" src={One} alt="" />
                
                <p className="product__price">
                    <span>Rs </span>
                    <strong>400</strong>
                    <span className="stock">Stock: <strong>20</strong></span>
                </p>
            </div>
            <button>ProceedToCheckOut</button>
        </div>
    )
}

export default ProductPage;
