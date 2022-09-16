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
          <h3>"My teacher hoodie is comfortable and my third graders liked pointing at the symbols!"</h3>
          <p>Jamie D., Wisconsin</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={MAUVEBG}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>"I have bought two hoodies and a shirt from this store. Everything is comfortable and perfect for teachers on-the-go."</h3>
          <p>Danielle P., New York</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={PURPLEBG}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>"I really am a bomb educator with a bomb curl pattern."</h3>
          <p>Tiffany R., Wisconsin</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;