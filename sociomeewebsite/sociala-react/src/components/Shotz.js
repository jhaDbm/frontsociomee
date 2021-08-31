import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import "./shotz.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {

    
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/images/ajay12.jpg" className="carsoulImg Shotzimg liveimg img-fluid" />
                 
                </div>
                <div>
                <img src="assets/images/ajay12.jpg" className="carsoulImg liveimg img-fluid" />
                  
                </div>
                <div>
                <img src="assets/images/ajay12.jpg" className="carsoulImg liveimg img-fluid" />
                    
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;
