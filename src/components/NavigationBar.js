import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TeacherLogo from '../img/brandLogo2.png';

const NavigationBar = () => {
  return (
    <Navbar sticky='top' className='navbar justify-content-center'>
        <Navbar.Brand href='#home'>
            <img 
                src={TeacherLogo} 
                alt='teacher brand logo' 
                className='main-logo' 
                width='100'
                height='100'
            />
        </Navbar.Brand>
        <Nav className='mt-5 mb-5 nav' activeKey='/home' variant='pills'>
            <Nav.Item>
                <Nav.Link href='/home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='link-1'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='link-2'>Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='link-2'>Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
    );
};

export default NavigationBar; 