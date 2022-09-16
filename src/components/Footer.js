import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
            <footer className='site-footer'>
                <Container>
                    <Row>
                        <Col xs={{ size: 4, offset: 1}} sm='2'>
                            <h5>Links</h5>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/'>About</Link>
                                </li>
                                <li>
                                    <Link to='/'>Shop</Link>
                                </li>
                                <li>
                                    <Link to='/'>Contact</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xs='6' sm='3' className='text-center'>
                            <h5>Social</h5>
                            <a
                                className='btn btn-social-icon btn-instagram'
                                href='https://www.instagram.com/teachersclubaccess/'
                            >
                                <i className='fa fa-instagram' />
                            </a>{' '}
                            <a
                                className='btn btn-social-icon btn-facebook'
                                href='https://www.facebook.com/teachersclubaccess/'
                            >
                                <i className='fa fa-facebook' />
                            </a>{' '}
                        </Col>
                    </Row>
                </Container>               
            </footer>
        )
}

export default Footer; 