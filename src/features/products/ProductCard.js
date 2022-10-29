import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product } ) => {
    const { id, image, name } = product; 
    
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg 
                    width='100%'
                    src={image}
                    alt={name}
                /> 
            </Card>
        </Link>
    );
};

export default ProductCard; 