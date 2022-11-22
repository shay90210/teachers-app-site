import { Col, Row, } from 'reactstrap';
import { selectAllProducts } from './productsSlice';
import ProductCard from './ProductCard';

const ProductsList = () => {
    const products = selectAllProducts();

    return (   
        <>
            <br />
            <hr />
            <h2
                style={{ 
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontFamily: 'cabin',
                    marginTop: '100px',
                    fontSize: '48px',
                }}
            >
                THE TEACHERS' COLLECTION
            </h2>  
            <Row className='products-list'>
                {products.map((product) => {
                    return (
                        <Col 
                            md="5" 
                            className="m-4" 
                            key={product.id}
                        >
                            <ProductCard product={product} />
                        </Col>
                    );
                })}
            </Row>  
        </>
    );
};

export default ProductsList;