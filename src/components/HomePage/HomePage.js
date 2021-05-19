import React from 'react';
import Product from '../Product/Product';
import One from '../../productImage/Image1.jpeg'
import { Col, Row } from 'react-bootstrap';

const HomePage = () => {
    return (
        <div>
            <Row>
                {[...new Array(15)].map(() => (
                <Col lg={3} md={4}>
                    <Product title="Dell Laptop" price={400} image={One} />
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default HomePage;
