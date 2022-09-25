import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 
    { 
    Navbar, 
    Container, 
    FormControl, 
    Dropdown, 
    Badge, 
    Nav 
} 
    from "react-bootstrap";

const ShopPage = () => {
    return (
        <div>
            <Navbar
                bg='dark' variant='dark' style={{ height: 80 }}
            >
                <Container>
                    <Navbar.Text className='search'>
                        <FormControl 
                            style={{ width: 500 }}
                            placeholder='Search a Product'
                            className='mx-auto'
                        />
                    </Navbar.Text>
                    <Nav>
                        <Dropdown alightRight>
                            <Dropdown.Toggle variant='success'>
                                <FontAwesomeIcon 
                                    icon={faShoppingCart} 
                                    color='white'
                                    fontSize='25px'
                                />
                                <Badge>{0}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                                style={{ minWidth: 370 }}
                            >
                                <span
                                    style={{ padding:10 }}
                                >
                                    Cart is Empty
                                </span>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>
            <h2
                style=
                {{ 
                    textAlign: 'center',
                    marginTop: '20px',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    fontFamily: 'open-sans'
                }}
            >
            THE TEACHER COLLECTION</h2>
        </div>
    )
}

export default ShopPage; 