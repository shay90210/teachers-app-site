import { Container, Row, Col, Button } from 'reactstrap';
import ProductDetail from '../features/products/ProductDetail';
import ProductsList from '../features/products/ProductsList';
import { selectRandomProduct } from '../features/products/productsSlice';

const ShopDirectoryPage = () => {
    let selectedProduct = selectRandomProduct();

    const toggleProduct = () => {
        selectedProduct = selectRandomProduct();
        console.log(selectedProduct);
    };

    return (
        <Container>
            <Button onClick={() => toggleProduct()}>
                Select Random Product
            </Button>
            <Row>
                <Col sm='5' md='7'>
                    <ProductsList />
                </Col>
                <Col sm='7' md='5'>
                    <ProductDetail product={selectedProduct} />
                </Col>
            </Row>
        </Container>
    );
};

export default ShopDirectoryPage;