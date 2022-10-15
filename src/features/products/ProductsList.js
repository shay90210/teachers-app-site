import { Col, Row, } from 'reactstrap';
import { selectAllProducts } from './productsSlice';
import ProductCard from './ProductCard';

const ProductsList = () => {
    const products = selectAllProducts();

    return (     
        <Row className="ms-auto">
            {products.map((product) => {
                return (
                    <Col md="5" className="m-4" key={product.id} >
                        <ProductCard product={product} />
                    </Col>
                );
            })}
        </Row>  
    );
};

export default ProductsList;