import React from 'react';
import './Homepage.css';
import Product from '../Product/Product';
import One from '../../productImage/Image1.jpeg'
import Two from '../../productImage/Image2.jpeg'
import Three from '../../productImage/Image3.jpeg'
import Four from '../../productImage/Image4.jpeg'
import Five from '../../productImage/Image5.jpeg'
//import { Col, Row } from 'react-bootstrap';

const HomePage = () => {
    return (
        <div>
            {/* <Row>
                {[...new Array(15)].map(() => (
                <Col lg={3} md={4}>
                    <Product title="Dell Laptop" price={400} image={One} />
                </Col>
            ))}
            </Row> */}
            <div className="productRow">
                <Product title="Dell Laptop" price={400} image={One} />
                <Product title="Dell Laptop" price={400} image={Two} />
                <Product title="Dell Laptop" price={400} image={Four} />
                <Product title="Dell Laptop" price={400} image={Five} />
                <Product title="Dell Laptop" price={400} image={Three} />
            </div>
            <div className="productRow">
                <Product title="Dell Laptop" price={400} image={One} />
                <Product title="Dell Laptop" price={400} image={Two} />
                <Product title="Dell Laptop" price={400} image={Four} />
                <Product title="Dell Laptop" price={400} image={Five} />
                <Product title="Dell Laptop" price={400} image={Three} />
            </div>
            <div className="productRow">
                <Product title="Dell Laptop" price={400} image={One} />
                <Product title="Dell Laptop" price={400} image={Two} />
                <Product title="Dell Laptop" price={400} image={Four} />
                <Product title="Dell Laptop" price={400} image={Five} />
                <Product title="Dell Laptop" price={400} image={Three} />
            </div>
            <div className="productRow">
                <Product title="Dell Laptop" price={400} image={One} />
                <Product title="Dell Laptop" price={400} image={Two} />
                <Product title="Dell Laptop" price={400} image={Four} />
                <Product title="Dell Laptop" price={400} image={Five} />
                <Product title="Dell Laptop" price={400} image={Three} />
            </div>
        </div>
    )
}

export default HomePage;
