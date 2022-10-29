import { Card, CardImg, CardBody, CardText, Col } from 'reactstrap';

const ProductDetail = ( {product} ) => {
    const { image, name, price } = product;

    return (
        <Col md='12' className='product-details m-4'>
            <Card>
                <CardImg 
                    top src={image} 
                    alt={name} 
                    className='display-image'
                />
                <CardBody
                    className='display-text'
                >
                    <CardText>{name}</CardText>
                    <CardText>${price}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ProductDetail;