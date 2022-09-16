import { Container, Col, Row } from "react-bootstrap";
import TeacherLogo from '../img/brandLogo2.png';

const Header = () => {
    return (
        <Container>
            <Col>
                <Row>
                    <img className='main-logo mt-5' src={TeacherLogo} alt="logo brand" />
                </Row>
                <Row>
                    <h1 className='mt-5'>THE TEACHERS' CLUB</h1>
                </Row>
            </Col>
        </Container>
    )
}

export default Header