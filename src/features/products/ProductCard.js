import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product } ) => {
    const { id, image, name } = ProductCard; 
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                    /> 
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay> 
            </Card>
        </Link>
    );
};

export default ProductCard; 