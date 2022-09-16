import Carousel from 'react-bootstrap/Carousel';
import GREENBG from '../img/greenbg.jpg';
import MAUVEBG from '../img/mauvebg.jpg';
import PURPLEBG from '../img/purplebg.jpg';

const MainCarousel = () => {
  return (
    <Carousel fade className='main-carousel'>
      <Carousel.Item>
        <img
          className="d-block"
          src={GREENBG}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={MAUVEBG}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={PURPLEBG}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;