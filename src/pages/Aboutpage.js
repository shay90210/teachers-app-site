import { Container, Row ,Col } from "reactstrap";
import WriteBelieveShirt from '../img/writeUntilYouBelieve.jpg'
import TeacherFounder from '../img/jodyProfile.jpg';
import AboutAccordion from "../components/AboutAccordion";

const AboutPage = () => {
    return (
        <div className='about-teachers'>
            <Container className='mt-5'>
                <Row 
                    style={{ background: '#ffe9e3' }}
                    className='about-row pt-5 pb-5'
                >
                    <Col className='about-text'>
                        <h3>Celebrate Your Teachers!</h3>
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
                <Row className='accord-row mb-5 mt-5'>
                    <AboutAccordion />
                </Row>
                <div style={{ background: '#c4c1e0' }}>
                    <Row className='founder-row pt-5'>
                        <Col className='founder-image'>
                            <img 
                                src={TeacherFounder}
                                width='300px'
                                alt='founder of the teachers club'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='founder-text'>
                            <h3 style={{ textAlign: 'center' }}>About Our Wonderful Teacher Founder!</h3>
                            <h3>Jody Reaves</h3>
                            <p style={{ textAlign: 'center' }}>English Educator, <i>Founder</i></p>
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
                </div>
            </Container>
        </div>
    )
}

export default AboutPage;
