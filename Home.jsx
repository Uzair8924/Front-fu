// Home.js
import React from 'react';
import './Home.css';
import './search.css';
import location from '../assets/images/location.png';
import Carousel from '../Components/Cardscorousel';
import dental from '../assets/images/dental.png';
import preg from '../assets/images/preg.png';
import child from '../assets/images/child.png';
import nutrition from '../assets/images/nutrition.png';
import physio from '../assets/images/physio.png';
import physician from '../assets/images/physician.png';
import ortho from '../assets/images/ortho.png';
const Home = () => {
  const cards = [
    {
      image: dental,
      heading: 'Dentist',
      description: 'Teething troubles? Schedule a dental checkup',
    },
    {
      image: preg,
      heading: 'Gynecologist',
      description: 'For womens pregnancy and infertility treatments',
    },
    {
      image: child,
      heading: 'Pediatrician',
      description: 'Child specialists and doctors for infant',
    },
    {
      image: nutrition,
      heading: 'Dietition/Nutrition',
      description: 'Get guidance on eating right and get your diet plans',
    },
    {
      image: physio,
      heading: 'Physiotherapist',
      description: 'Pulled a muscle? Get a Physiotherapist.',
    },
    {
      image: physician,
      heading: 'General Physician',
      description: 'Find the right family doctor in your neighbourhood',
    },
    {
      image: ortho,
      heading: 'Orthopedist',
      description: 'For bones and joint issues get Orthopedist',
    },
  ];

  return (
    <>
      <div style={{ margin: '0 90px' }}>
        <div className="search-bar">
          <div className="location-container">
            <img src={location} alt="Location Icon" className="location-icon" />
            <input type="text" placeholder="Location" className="location-input" />
          </div>
          <input type="text" placeholder="Search for providers..." className="search-input" />
        </div>
        <button className="book-appointment-btn">Book Appointment</button>
      </div>
      <div>
        <Carousel cards={cards} />
      </div>
    </>
  );
};

export default Home;
