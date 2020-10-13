import React from 'react';
import home_banner from '../images/home-banner.png';
import logo from '../images/logo.svg';
import '../css/App.css';

function App() {
  const imageUrl = `url(${home_banner})`;
  return (
    <div className="App">
      <div className="home-container">
        <div className="home intro">
          <p className="home-intro"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
        <div className="home image">
          <img className="logo" src={home_banner} alt="Periodismo feminista de América Latina" />
        </div>
      </div>
    </div>
  );
}

export default App;
