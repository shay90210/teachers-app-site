import { Card, CardImg, CardBody, CardText, } 
from 'reactstrap';
import Counter from '../counter/Counter';

const ProductDetail = ( {product} ) => {
    const { image, name, price } = product;

    return (
        <>
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
        </>
    );
};

export default ProductDetail;