import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectProductById } from "../features/products/productsSlice";
import ProductDetail from "../features/products/ProductDetail";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = selectProductById(productId);

    return (
        <Container>
            <Row>
                <ProductDetail product={product} />
            </Row>
        </Container>
    )
}

export default ProductDetailPage;