// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Components/Cardsc.css';

const Card = ({ image, heading, description }) => (
  <div className="card">
    <img src={image} alt={heading} className="card-image" />
    <h3 className="card-heading">{heading}</h3>
    <p className="card-description">{description}</p>
  </div>
);

const Carousel = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed as needed (in milliseconds)
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
