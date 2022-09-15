import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar sticky='top' className='navbar justify-content-center'>
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