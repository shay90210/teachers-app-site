import { 
    Card, 
    CardImg, 
    CardBody, 
    CardText, 
    Col, 
    Button,
    Row
} 
from 'reactstrap';
import Counter from '../counter/Counter';

const ProductDetail = ( {product} ) => {
    const { image, name, price } = product;

    return (
        <>
            <Row>
                <Col>
                    <Card className='product-details pt-5 pb-3 m-4'>
                        <CardImg 
                            top src={image} 
                            alt={name} 
                            className='display-image'
                        />
                        <CardBody>
                            <CardText className='display-name'>{name}</CardText>
                            <CardText className='display-price'>${price}</CardText>
                                <div className='counter'>
                                    <Counter /> 
                                </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className='mb-4 mt-3'>
                    <Button
                        size='lg'
                        color='primary'
                        onClick={() => {
                            
                        }}
                        style={{
                            display: 'block',
                            margin: 'auto'
                        }}
                    >
                        Return to Shop
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default ProductDetail;