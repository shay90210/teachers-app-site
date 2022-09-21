import { Container, Row ,Col } from "reactstrap";
import WriteBelieveShirt from '../img/writeUntilYouBelieve.jpg'
import AboutAccordion from "../components/AboutAccordion";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div>
            <NavigationBar />
            <Header />
            <Container>
                <Row>
                    <Col>
                        <h3>Celebrate your teachers!</h3>
                        <p>
                            As educators, we have the privilege of being in a signature, exemplary club that
                            is only understood by fellow teachers. While navigating the world of education
                            can be difficult, all of the long hours, grading, and lesson planning is worth
                            the impact we have on the future leaders of this world.
                        </p>
                        <p>The sole purpose of The Teachers' Club is to provide educators with apparel
                            and merchandise that evoke the common feelings we all share, while celebrating
                            the wonderful work we're doing each day. We hope you find something in The
                            Teachers' Club that you feel proud to wear out loud.
                        </p>                    
                    </Col>
                    <Col>
                        <img 
                            src={WriteBelieveShirt}
                            width='200px'
                            alt='woman wearing write until you belive shirt' 
                        />
                    </Col>
                </Row>
                <Row>
                    <AboutAccordion />
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default AboutPage;
