import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductDetail from '../features/products/ProductDetail';
import ProductsList from '../features/products/ProductsList';
import { selectProductById } from '../features/products/productsSlice';

const ShopDirectoryPage = () => {
    const [productId, setProductId] = useState(1);
    const selectedProduct = selectProductById(productId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <ProductsList setProductId={setProductId} />
                </Col>
                <Col sm='7' md='5'>
                    <ProductDetail product={selectedProduct} />
                </Col>
            </Row>
        </Container>
    );
};

export default ShopDirectoryPage;