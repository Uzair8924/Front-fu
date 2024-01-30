import React from 'react'
import './Home.css'
import './search.css'
import location from '../assets/images/location.png'
const Home = () => {
  return (
    <div style={{ margin: '0 90px' }}>
    <div className="search-bar">
      <div className="location-container">
        <img src= {location} alt="Location Icon" className="location-icon" />
        <input type="text" placeholder="Location" className="location-input" />
      </div>
      <input type="text" placeholder="Search for providers..." className="search-input" />
    </div>
    </div>
  )
}

export default Home