import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./livestrems.css"
import ShowComments from "../components/ShowComments"
import NewComments from "../components/NewComments";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <div>
            <Carousel>
               
                <div>
               
                    <img src="assets/images/ajay12.jpg" className="liveimg img-fluid" />
                    <p className="legend">🔴  LIVE</p>
                </div>
                <div>
                <img src="assets/images/ajay12.jpg" className="liveimg img-fluid"  />
                    <p className="legend">🔴  LIVE</p>
                </div>
                <div>
                <img src="assets/images/ajay12.jpg" className="liveimg img-fluid"  />
                    <p className="legend">🔴  LIVE</p>
                </div>

                <ShowComments />
                <NewComments />
                <div class="card-body d-flex p-0 mt-0 mb-3"><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a><a href="" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"></a></div>
                <div class="input-group viewinput mb-3"><input type="text" class="form-control enable viewinput" placeholder="Comments Here.." /><div class="input-group-prepend"><div class="input-group-text btnsend">Send</div></div></div>         
            </Carousel>

            <ShowComments />
                {/* <NewComments /> */}
                <div class="card-body d-flex p-0 mt-0 mb-3"><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a><a href="" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"></a></div>
                <div class="input-group viewinput mb-3"><input type="text" class="form-control enable viewinput" placeholder="Comments Here.." /><div class="input-group-prepend"><div class="input-group-text btnsend">Send</div></div></div>         
            </div>
        );
    }
};

export default DemoCarousel;
