import { Container, Col, Row } from "react-bootstrap";

const Header = () => {
    return (
        <Container>
            <Col>
                <Row>
                    <h1 className='mt-5'>THE TEACHERS' CLUB</h1>
                    <h2>Teacher swag where you can speak your thoughts out loud!</h2>
                </Row>
            </Col>
        </Container>
    )
}

export default Header