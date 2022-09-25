import { 
    Nav, 
    NavItem, 
    Dropdown, 
    Badge, 
    DropdownMenu, 
    DropdownToggle,
    DropdownItem
}
from 'reactstrap';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

const NavigationBar = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    
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
            <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={direction}
            >
                <DropdownToggle>
                    <FontAwesomeIcon 
                        icon={faShoppingCart} 
                        color='white'
                        fontSize='25px'
                    />
                    <Badge>{0}</Badge>
                </DropdownToggle>

                <DropdownMenu {...args}>
                    <DropdownItem>
                        <span>Cart is Empty</span>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
    </Nav>    
   )
}

NavigationBar.propTypes = {
    direction: PropTypes.string,
}


export default NavigationBar; 