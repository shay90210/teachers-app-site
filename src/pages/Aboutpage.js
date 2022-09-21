import { Container, Row ,Col } from "reactstrap";
import WriteBelieveShirt from '../img/writeUntilYouBelieve.jpg'
import TeacherFounder from '../img/jodyProfile.jpg';
import AboutAccordion from "../components/AboutAccordion";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div>
            <NavigationBar />
            <Header />
            <Container className='mt-5'>
                <Row>
                    <Col className='about-teachers'>
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
                    <Col className='about-image'>
                        <img 
                            src={WriteBelieveShirt}
                            width='500px'
                            alt='woman wearing write until you belive shirt' 
                        />
                    </Col>
                </Row>
                <Row className='mb-5 mt-5'>
                    <AboutAccordion />
                </Row>
                <Row>
                    <Col className='founder-image'>
                        <img 
                            src={TeacherFounder}
                            width='500px'
                            alt='founder of the teachers club'
                            className='mb-5'
                        />
                    </Col>
                    <Col className='about-founder'>
                        <h3>Jody Reaves</h3>
                        <p>English Educator, Founder</p>
                        <p>For 10 years, Jody has dedicated her life to educating high school students.
                            Her alma mater University of Wisconsin-Whitewater provided the necessary tools
                            for Jody to succeed at her first school - Washington High School in Milwaukee,
                            WI.
                        </p>          
                        <p>The Teachers' Club started out as a small idea and became something bigger
                            for Jody. She developed the concept to spread love to teachers after realizing
                            that teacher shortages came from a lack of motivation, a lack of support, and
                            much needed love and attention.
                        </p>          
                        <p>With her humorous sarcasm and loving nature, she created apparel for teachers
                            to have fun with their students and to remind teachers their 'why' for choosing
                            to become an educator.

                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default AboutPage;
