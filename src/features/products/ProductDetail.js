import { 
    Card, 
    CardImg, 
    CardBody, 
    CardText, 
    Col, 
    CardTitle,
    Button
} 
from 'reactstrap';
import Counter from '../counter/Counter';

const ProductDetail = ( {product} ) => {
    const { image, name, price } = product;

    return (
        <>
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
            <Col className='mt-4'>
                <Card>
                    <CardTitle
                        style={{
                            fontSize: '20px',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginTop: '10px'
                        }}
                    >
                        Item Summary
                    </CardTitle>
                        <hr />
                    <CardBody>

                    </CardBody>
                </Card>
            </Col>
            <Button>Return to Shop</Button>
        </>
    );
};

export default ProductDetail;