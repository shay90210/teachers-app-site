import ContactForm from '../components/ContactForm';
import { Container, Row, Col } from 'reactstrap';

const ContactPage = () => {
    return (
        <div className='contact-info'>
            <Container>
                <h2 className='pt-5 pb-3' style={{ textAlign: 'center' }}>Contact Us</h2>
                <Row className='row-content'>
                    <Col>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactPage;