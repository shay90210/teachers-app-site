import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header';
import MainCarousel from '../components/MainCarousel';
import Footer from '../components/Footer';
import GirlWithMug from '../img/mug3.jpg';
import TeacherWithBag from '../img/teacherhandbag.jpg';
import IAmSweatshirt from '../img/afroteachlovesweatshirt.jpg';
import { Container, Col, Row } from 'reactstrap';

const HomePage = () => {
    return (
        <div>
            <NavigationBar />
            <Header />
                <Container className='mt-5 mb-5 image-collage'>
                    <Row>
                        <Col>
                            <img 
                                src={GirlWithMug}
                                width='400px'
                                alt='girl holding teach with love mug'
                            />
                        </Col>
            
                        <Col>
                            <img 
                                src={TeacherWithBag}
                                width='400px'
                                alt='teacher holding an exclusive handbag'
                        />
                        </Col>

                        <Col>
                            <img 
                                src={IAmSweatshirt}
                                width='400px'
                                alt='woman with afro wearing "I am..." sweatshirt'
                        />
                        </Col>
                    </Row>
                </Container>
            <MainCarousel />
            <Footer />
        </div>
    )
}

export default HomePage;