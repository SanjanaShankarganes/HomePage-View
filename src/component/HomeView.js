import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import card1Image from '../asserts/List-Picture.png';
import card2Image from '../asserts/Map-Picture.png';
import card3Image from '../asserts/Reg-Picture.png';
import Footer from './Footer';
const HomeView = () => {
  const handleCardClick = (cardNumber) => {
    alert(`Card ${cardNumber} clicked`);
  };
  return (
    
          <div class="card-div row d-flex justify-content-evenly">
          <div class="card col-sm-12 col-md-4 col-lg-3 my-4 mx-3" onClick="handleCardClick(1)">
          <span class="card-body">
                  <span class="h3 card-title">View List</span>
              </span>
                  <img  src={card1Image} 
          alt="Card 1" />
                  <p class="card-content mt-5">Entire list of idols and applicants</p>
              
          </div>
          <div class="card col-sm-12 col-md-4 col-lg-3 my-4 mx-3" onClick="handleCardClick(2)">
              <span class="card-body">
                  <span class="h3 card-title">Map</span>
              </span>
              <img  src={card2Image} 
          alt="Card 1" />
              <p class="card-content mt-5">Location of idols and tracking</p>
          </div>
          <div class="card col-sm-12 col-md-4 col-lg-3 my-4 mx-3 " onClick="handleCardClick(3)">
              <div class="card-body text-start">
                  <p class="card-title h3">Registration Count</p>
              </div>
              <img  src={card3Image} 
           alt="Card 3" />
              <div class="card-content mt-5">
                  <p>Total number of idols registered:</p>
                  <p>Number of idols immersed:</p>
                  <p>Number of idols not immersed:</p>
              </div>
          </div>
          <Footer />
      </div>
      
  );
};

export default HomeView;
