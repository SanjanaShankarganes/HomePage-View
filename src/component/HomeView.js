import React from 'react';

import card1Image from '../asserts/List-Picture.png';
import card2Image from '../asserts/Map-Picture.png';
import card3Image from '../asserts/Reg-Picture.png';
const HomeView = () => {
  const handleCardClick = (cardNumber) => {
    alert(`Card ${cardNumber} clicked`);
  };
  return (
    <div className="container">
      <div
        className="card"
        onClick={() => handleCardClick(1)}   
      >
       
        <div className="card-body">
          <h2 className="card-title">View List</h2>
        </div>
        <img
          src={card1Image} 
          alt="Card 1"
        />
        <p className="card-content">Entire list of idols and applicants</p>
      </div>
      <div
        className="card"
        onClick={() => handleCardClick(2)}
      >
        
        <div className="card-body">
          <h2 className="card-title">Map</h2>
         
        </div>
        <img
          src={card2Image}  
          alt="Card 2"
        />
         <p className="card-content">Location of idols and tracking</p>
      </div>
      <div
        
      >
        <div className="card-body">
          <h2 className="card-title">Registration Count</h2>
        </div>
        <img
          src={card3Image}  
          alt="Card 3"
        />
        <p >Total number of idols registered:  </p>
          <p >Numbered of idols immersed :  </p>
          <p >Number of idols not immersed:  </p>
      </div>
    </div>
  );
};

export default HomeView;
