import { Container, Col, Row } from "react-bootstrap";
import TeacherLogo from '../img/brandLogo2.png';

const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img className='main-logo mt-5' src={TeacherLogo} alt="logo brand" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className='mt-5'>THE TEACHERS' CLUB</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Header