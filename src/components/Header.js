import { Container, Col, Row } from "react-bootstrap";
import TeacherLogo from '../img/brandLogo2.png';

const Header = () => {
    return (
        <Container>
            <Col>
                <Row>
                    <h1>THE TEACHERS' CLUB</h1>
                </Row>
            </Col>
            <Col>
                <Row>
                    <img src={TeacherLogo} alt='teacher brand logo' />
                </Row>
            </Col>
        </Container>
    )
}

export default Header