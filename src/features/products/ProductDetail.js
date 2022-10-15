import { Card, CardImg, Col } from 'reactstrap';

const ProductDetail = ( {product} ) => {
    const { image, name } = product;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
            </Card>
        </Col>
    );
};

export default ProductDetail;