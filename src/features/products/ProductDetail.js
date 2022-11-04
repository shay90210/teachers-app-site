import { 
    Card, 
    CardImg, 
    CardBody, 
    CardText, 
    Col,
    CardTitle
    } 
from 'reactstrap';

const ProductDetail = ( {product} ) => {
    const { image, name, price } = product;

    return (
        <>
            <Col md='6' className='product-details m-4'>
                <Card className='pt-5 pb-3'>
                    <CardImg 
                        top src={image} 
                        alt={name} 
                        className='display-image'
                    />
                    <CardBody>
                        <CardText className='display-name'>{name}</CardText>
                        <CardText className='display-price'>${price}</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col md='4' className='cart-details m-4 mb-5'>
                <Card>
                    <CardTitle className='item-summary'>Item Summary</CardTitle>
                </Card>
            </Col>  
        </>
    );
};

export default ProductDetail;