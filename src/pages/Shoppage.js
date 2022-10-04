import { Container } from "react-bootstrap";

const ShopPage = () => {    
    return (
        <div className='shop-nav'>
            <Container
                style={{
                    background: 'black',
                    color: 'white',
                    marginTop: '80px'
                }}
            >
                <p
                    style=
                    {{  
                        fontSize: '30px',
                        fontWeight: 'bold',
                        fontFamily: 'open-sans',
                        textAlign: 'center'

                    }}
                > THE TEACHER COLLECTION </p>
            </Container>
        </div>
    )

}

export default ShopPage;