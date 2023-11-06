import React from 'react';
import { Carousel } from 'react-bootstrap';
import shoe1 from '../../../assets/Carousel/slideshow-1.webp';
import shoe2 from '../../../assets/Carousel/slideshow-2.webp';
import shoe3 from '../../../assets/Carousel/slideshow-3.webp';


const ShoeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shoe1}
          alt="First Shoe"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shoe2}
          alt="Second Shoe"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shoe3}
          alt="Second Shoe"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ShoeCarousel;
