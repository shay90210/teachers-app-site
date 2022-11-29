import MainCarousel from '../components/MainCarousel';
import GirlWithMug from '../img/mug3.jpg';
import TeacherWithBag from '../img/teacherhandbag.jpg';
import BeATeacher from '../img/beateacher.jpg';
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
                    <Col>
                        <img 
                            src={TeacherWithBag}
                            width='400px'
                            alt='teacher holding an exclusive handbag'
                            className='image-two'
                        />
                    </Col>
                    <Col>
                        <img 
                            src={BeATeacher}
                            width='400px'
                            alt='teacher standing in field wearing a black TC shirt'
                            className='image-three'
                        />
                    </Col>
                </Row>
            </Container>
            <MainCarousel />
        </div>
    )
}

export default HomePage;