import { Card, CardImg, CardBody, CardText, Col } from 'reactstrap';

const ProductDetail = ( {product} ) => {
    const { image, name, price } = product;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} className='product-image' />
                <CardBody>
                    <CardText>{name}</CardText>
                    <CardText>${price}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ProductDetail;