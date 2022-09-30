import { Component } from "react";
import { Container } from "react-bootstrap";
import { Connect } from "react-redux";
import { Card, CardImg, CardTitle, CardBody, } from "reactstrap";

class ShopPage extends Component {
    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <div>
                    <Card key={item.id}>
                        <CardImg>
                            <img src={item.img} alt={item.name} />
                            <CardTitle>{item.title}</CardTitle>
                        </CardImg>

                        <CardBody>
                            <p><b>Price: {item.price}$</b></p>
                        </CardBody>
                    </Card>
                </div>
            )
            })

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
                    <div className="box">
                        {itemList}
                    </div>
            </Container>
        </div>
    )

}
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }

export default Connect(mapStateToProps)(ShopPage); 