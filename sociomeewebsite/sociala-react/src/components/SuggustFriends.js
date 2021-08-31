import React from "react";
import Slider from "react-slick";
import "./suggustfriends.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="card suggustmain">
        <h4>Suggest Friends</h4>

    <Slider {...settings}>
       
      <div>
      <img src="assets/images/suggust1.jpg" className="suggustImg" />
      <span className="suggustname">ajay</span>
      </div>
      <div>
      <img src="assets/images/img42.jpg" className="suggustImg" />
      <span>ajay</span>
      </div>
      <div>
      <img src="assets/images/arvind.jpg" className="suggustImg" />
      <span>ajay</span>
      </div>
      <div>
      <img src="assets/images/saddy.jpg" className="suggustImg" />
      <span>ajay</span>
      </div>
      <div>
      <img src="assets/images/priyanshu.jpg" className="suggustImg" />
      <span>ajay</span>
      </div>
      <div>
      <img src="assets/images/prince.jpg" className="suggustImg" />
      <span>ajay</span>
      </div>
      <div>
      <img src="assets/images/saddy.jpg" className="suggustImg" />
      <span>ajay</span>
      </div>
      <div>
      <img src="assets/images/priyanshu.jpg" className="suggustImg" />
      <span>ajay</span>
      </div>
      <div>
      <img src="assets/images/prince.jpg" className="suggustImg" />
      <span>ajay</span>
      </div>
     
    </Slider>
    </div>
  );
}