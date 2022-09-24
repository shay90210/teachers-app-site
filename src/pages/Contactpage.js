import ContactForm from '../components/ContactForm';
import { Container, Row, Col } from 'reactstrap';

const ContactPage = () => {
    return (
        <div className='contact-info'>
            <Container>
                <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
                <Row className='row-content'>
                    <Col md='10'>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactPage;