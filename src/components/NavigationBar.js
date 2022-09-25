import { 
    Nav, 
    NavItem, 
    Dropdown, 
    Badge, 
    DropdownMenu, 
    DropdownToggle 
} 
from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <Dropdown alightRight>
            <DropdownToggle>
                <FontAwesomeIcon 
                    icon={faShoppingCart} 
                    color='white'
                    fontSize='25px'
                />
                <Badge>{0}</Badge>
            </DropdownToggle>

            <DropdownMenu
                style={{ minWidth: 370 }}
            >
                <span
                    style={{ padding:10 }}
                >
                    Cart is Empty
                </span>
            </DropdownMenu>
        </Dropdown>
    </Nav>    
   )
}

export default NavigationBar; 