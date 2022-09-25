import 
    { 
    Navbar, 
    Container, 
    FormControl, 
} 
    from "react-bootstrap";

const ShopPage = () => {
    return (
        <div className='shop-nav'>
            <Navbar
                bg='dark' 
                variant='dark' 
                style={{ 
                    height: 80, 
                    marginBottom: '20px',
                    paddingTop: '15px',
                    marginTop: '100px'
                }}
            >
                <Container>
                    <Navbar.Brand>
                        <p
                            style=
                            {{  
                                fontSize: '30px',
                                fontWeight: 'bold',
                                fontFamily: 'open-sans',

                            }}
                        > THE TEACHER COLLECTION </p>
                    </Navbar.Brand>
                    <Navbar.Text className='search'>
                        <FormControl 
                            style={{ width: 500 }}
                            placeholder='Search a Product'
                            className='mx-auto'
                        />
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}

export default ShopPage; 