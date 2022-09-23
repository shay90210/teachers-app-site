import MainCarousel from '../components/MainCarousel';
import GirlWithMug from '../img/mug3.jpg';
import TeacherWithBag from '../img/teacherhandbag.jpg';
import IAmSweatshirt from '../img/afroteachlovesweatshirt.jpg';
import { Container, Col, Row } from 'reactstrap';

const HomePage = () => {
    return (
        <div>
            <Container className='mt-5 mb-5 image-collage'>
                <Row>
                    <h2>The safe space to wear your thoughts out loud!</h2>
                </Row>
                <Row className='home-images'>
                    <Col>
                        <img 
                            src={GirlWithMug}
                            width='400px'
                            alt='girl holding teach with love mug'
                            className='image-one'
                    />
                    </Col>
        
                    <Col className='image-two'>
                        <img 
                            src={TeacherWithBag}
                            width='400px'
                            alt='teacher holding an exclusive handbag'
                    />
                    </Col>

                    <Col className='image-three'>
                        <img 
                            src={IAmSweatshirt}
                            width='400px'
                            alt='woman with afro wearing "I am..." sweatshirt'
                    />
                    </Col>
                </Row>
            </Container>
            <MainCarousel />
        </div>
    )
}

export default HomePage;