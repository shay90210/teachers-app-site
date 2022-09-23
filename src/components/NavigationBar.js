import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    
  return (
    <Nav className='main-nav pt-3 pb-3 justify-content-center'>
        <NavItem>
            <NavLink className='nav-link' to='/'> HOME</NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-link' to='/about'> ABOUT</NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-link' to='/shop'> SHOP</NavLink>
        </NavItem>
        <NavItem>
            <NavLink className='nav-link' to='/contact'> CONTACT</NavLink>
        </NavItem>
    </Nav>    
   )
}

export default NavigationBar; 