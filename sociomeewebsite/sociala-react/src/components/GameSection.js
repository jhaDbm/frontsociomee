import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./gamesection.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function GameSection(){

  
        return (
            <div>
                <h3>Yours Game</h3>
            <Carousel className="mainImgContainer">
                <div>
                    <img src="assets/images/game1.jpg" className="carsoulImg Shotzimg liveimg img-fluid" />
                    <p className="imageSection">Josephin Water</p>
                </div>
                <div>
                <img src="assets/images/game2.jpg" className="carsoulImg liveimg img-fluid" />
                <p className="imageSection">Josephin Water</p>
                </div>
                <div>
                <img src="assets/images/game3.jpg" className="carsoulImg liveimg img-fluid" />
                <p className="imageSection">Josephin Water</p>
                </div>
              

            </Carousel>
            </div>
        );
    }


export default GameSection;
