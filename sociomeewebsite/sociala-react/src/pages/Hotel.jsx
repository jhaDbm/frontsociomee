import React, { Component , Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

import Slider from "react-slick";
import "./hotel.css"

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const slideList = [
    {   
        imageUrl: 'mob1.jpg',
        name: 'product-image ',
    },
    {   
        imageUrl: 'mob1.jpg',
        name: 'product-image ',
    },
    {   
        imageUrl: 'mob1.jpg',
        name: 'product-image ',
    },
    
]


const TabOne = [
    {
        image: 'ajay.jpg',
        bigImage: 'assets/images/ajay12.jpg',
    },
    {
        image: '02',
        bigImage: 'assets/images/ajay12.jpg',
    },
    {
        image: '03',
        bigImage: 'assets/images/ajay12.jpg',
    },
    {
        image: '04',
        bigImage: 'assets/images/ajay12.jpg',
    },
    {
        image: '05',
        bigImage: 'assets/images/ajay12.jpg',
    },
    {
        image: '06',
        bigImage: 'assets/images/ajay12.jpg',
    },
]



class Hotelsingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }
    render() {
        const { tab1, isOpen } = this.state;
        const hotelsettings = {
            arrows: false,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            centerMode: false,
            variableWidth: false,
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            }]
        };
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row">
                                <div className="col-xl-12 col-xxl-12 col-lg-12">
                                    <Slider {...hotelsettings}>
                                        {slideList.map((value , index) => (
                                        <div key={index} className="pe-2">
                                            <img src={`assets/images/${value.imageUrl}`} alt="avater" className="rounded-3 img-fluid" />
                                        </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-8 col-xxl-9 col-lg-8">

                                    <div className="card d-block mt-3 border-0 shadow-xss bg-white p-lg-5 p-4">
                                        <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-primary-gradiant d-inline-block text-white ">Featured</span>
                                        <h2 className="fw-700 font-lg mt-3 mb-2">GameHunterss on Youtube</h2>
                                        <p className="font-xsss fw-500 text-grey-500 lh-30 pe-5 mt-3 me-5 settext">ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.
                                        ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.
                                        ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                                        
                                        <div className="clearfix"></div>
                                        <div className="star d-block w-100 text-left mt-2">
                                            <img src="assets/images/star.png" alt="star" className="w15 float-left" />
                                            <img src="assets/images/star.png" alt="star" className="w15 float-left" />
                                            <img src="assets/images/star.png" alt="star" className="w15 float-left" />
                                            <img src="assets/images/star.png" alt="star" className="w15 float-left" />
                                            <img src="assets/images/star-disable.png" alt="star" className="w15 float-left me-2" />
                                        </div>
                                        <p className="review-link font-xssss fw-600 text-grey-500 lh-3 mb-0">(456 ratings ) 2 customer review</p>
                                        <div className="clearfix"></div>
                                        <h5 className="mt-4 mb-4 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-ruler-pencil text-grey-500 me-1"></i> 200 sq</h5>
                                        <h5 className="mt-4 mb-4 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-rss-alt text-grey-500 me-1"></i> WiFi</h5>
                                        <h5 className="mt-4 mb-4 d-inline-block font-xssss fw-600 text-grey-500"><i className="btn-round-sm bg-greylight ti-credit-card text-grey-500 me-1"></i> Card</h5>
                                        <div className="clearfix"></div>

                                       
                                    </div>
                                   



                                    <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4">
                                    <video className="video-set" width="625" height="400" controls>
                                            <source src="movie.mp4" type="video/mp4" />
                                            <source src="movie.ogg" type="video/ogg" />
                                            Your browser does not support the video tag.
                                            </video>
                                    

                                    </div>

                                    <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4">
                                        <h2 className="fw-700 font-sm mb-3 mt-1 ps-1 mb-3">Description</h2>
                                        <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 ps-2">After creating more than a dozen courses on Microsoft Access databases and programming in VBA, many students have contacted me with discussions on specific problems and scenarios.  From these discussions, I have created videos reviewing the details of the most useful techniques that everyone will eventually need.  I have made sure that every detail of these techniques is recorded in the videos!  BUT you should be somewhat familiar with VBA since there are lots of coding examples in the course. <br />                                        There are MANY tips and tricks in this workshop that you will not find an ANY of my other courses! <br />  I also include a specific database design challenge from a student and then go over the details of how I would handle it. <br /> If you are willing to take the time to go through this course you could easily be much more productive with Microsoft Access in just a few hours! </p>
                                    </div>

                                    <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4">
                                        <h2 className="fw-700 font-sm mb-3 mt-1 ps-1 mb-3">Photos</h2>
                                        <div className="row ps-3 pe-3">
                                            {TabOne.map((value , index) => (
                                                <div className="col-sm-4 col-xss-4 pe-1 ps-1 mb-2" key={index}>
                                                    {isOpen && (
                                                        <Lightbox
                                                            mainSrc={TabOne[tab1].bigImage}
                                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                                            onMovePrevRequest={() =>
                                                            this.setState({
                                                                tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                                            })
                                                            }
                                                            onMoveNextRequest={() =>
                                                                this.setState({
                                                                    tab1: (tab1 + 1) % TabOne.length,
                                                                })
                                                            }
                                                        />
                                                    )}
                                                    
                                                    <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                                        <a href="#portfolio-details">
                                                            <img src={`${value.bigImage}`} alt="Portfolio" className="w-100"/>
                                                        </a>
                                            
                                                    </div>
                                                
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-4 col-xxl-3 col-lg-4 ps-0">

                                    <div className="card w-100 border-0 mt-3 mb-4 p-lg-4 p-3 shadow-xss position-relative rounded-3 bg-white">
                                        <div className="section full mb-4 p-4 bg-light theme-dark-bg theme-light-bg rounded-3">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <h2 className="display2-size lh-1 m-0 text-grey-900 fw-700">4.3</h2>
                                                </div>
                                                <div className="col-12 text-center">
                                                    <h4 className="font-xssss text-grey-600 fw-600 mt-2">Based on 433 rating</h4>
                                                </div>
                                            </div>
                                            
                                            <div className="row mt-3">
                                                <div className="col-7 pe-1 mt-0">
                                                    <div className="star d-inline text-left">
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                    </div>
                                                </div>
                                                <div className="col-5 ps-1 text-right"><h4 className="font-xssss mt-1 fw-700 text-grey-800">Support</h4></div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col-7 pe-1 mt-0">
                                                    <div className="star d-inline text-left">
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star-disable.png" alt="star" className="w15" />
                                                        <img src="assets/images/star-disable.png" alt="star" className="w15" />
                                                    </div>
                                                </div>
                                                <div className="col-5 ps-1 text-right"><h4 className="font-xssss mt-1 fw-700 text-grey-800">Clean</h4></div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col-7 pe-1 mt-0">
                                                    <div className="star d-inline text-left">
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star-disable.png" alt="star" className="w15" />
                                                        <img src="assets/images/star-disable.png" alt="star" className="w15" />
                                                        <img src="assets/images/star-disable.png" alt="star" className="w15" />
                                                    </div>
                                                </div>
                                                <div className="col-5 ps-1 text-right"><h4 className="font-xssss mt-1 fw-700 text-grey-800">Speed</h4></div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col-7 pe-1 mt-0">
                                                    <div className="star d-inline text-left">
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star-disable.png" alt="star" className="w15" />
                                                    </div>
                                                </div>
                                                <div className="col-5 ps-1 text-right"><h4 className="font-xssss mt-1 fw-700 text-grey-800">Quality</h4></div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col-7 pe-1 mt-0">
                                                    <div className="star d-inline text-left">
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star.png" alt="star" className="w15" />
                                                        <img src="assets/images/star-disable.png" alt="star" className="w15" />
                                                    </div>
                                                </div>
                                                <div className="col-5 ps-1 text-right"><h4 className="font-xssss mt-1 fw-700 text-grey-800">Delivery</h4></div>
                                            </div>
                                        </div>
                                        <span className="headding">Blog and Posts</span>
                                        <div className="row">
                                            <div className="col-2 text-left">
                                                <figure className="avatar float-left mb-0"><img src="assets/images/prince.jpg" alt="avater" className="float-right shadow-none w40 me-2" /></figure>
                                            </div>
                                            
                                            <div className="col-10 ps-4">
                                                <div className="content">
                                                    <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                                                    <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 m-2 mb-0">July 26 at 8:20 PM</h6>
                                                    <div className="star d-block w-100 text-left">
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star-disable.png" alt="star" className="w10" />
                                                    </div>                            
                                                    <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-2 text-left">
                                                <figure className="avatar float-left mb-0"><img src="assets/images/saket.jpg" alt="avater" className="float-right shadow-none w40 me-2" /></figure>
                                            </div>
                                            <div className="col-10 ps-4">
                                                <div className="content">
                                                    <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                                                    <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">July 26 at 8:20 PM</h6>
                                                    <div className="star d-block w-100 text-left">
                                                        {/* <img src="assets/images/star.png" alt="star" className="w10" /> */}
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star-disable.png" alt="star" className="w10" />
                                                    </div>                            
                                                    <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-2 text-left">
                                                <figure className="avatar float-left mb-0"><img src="assets/images/ajayjha.jpg" alt="avater" className="float-right shadow-none w40 me-2" /></figure>
                                            </div>
                                            <div className="col-10 ps-4">
                                                <div className="content">
                                                    <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                                                    <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">July 26 at 8:20 PM</h6>
                                                    <div className="star d-block w-100 text-left">
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star-disable.png" alt="star" className="w10" />
                                                    </div>                            
                                                    <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-2 text-left">
                                                <figure className="avatar float-left mb-0"><img src="assets/images/saddy.jpg" alt="avater" className="float-right shadow-none w40 me-2" /></figure>
                                            </div>
                                            <div className="col-10 ps-4">
                                                <div className="content">
                                                    <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                                                    <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">July 26 at 8:20 PM</h6>
                                                    <div className="star d-block w-100 text-left">
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star.png" alt="star" className="w10" />
                                                        <img src="assets/images/star-disable.png" alt="star" className="w10" />
                                                    </div>                            
                                                    <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row"><a href="/defaulthoteldetails" className="d-block p-2 lh-32 text-center bg-greylight fw-600 font-xssss text-grey-900 rounded-3">Add a Review</a></div>
                                    </div>

                                    <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4">
                                        <h2 className="fw-700 font-sm mb-3 mt-1 ps-1 mb-3">Photos</h2>
                                        <div className="row ps-3 pe-3">
                                            {TabOne.map((value , index) => (
                                                <div className="col-sm-4 col-xss-4 pe-1 ps-1 mb-2" key={index}>
                                                    {isOpen && (
                                                        <Lightbox
                                                            mainSrc={TabOne[tab1].bigImage}
                                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                                            onMovePrevRequest={() =>
                                                            this.setState({
                                                                tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                                            })
                                                            }
                                                            onMoveNextRequest={() =>
                                                                this.setState({
                                                                    tab1: (tab1 + 1) % TabOne.length,
                                                                })
                                                            }
                                                        />
                                                    )}
                                                    
                                                    <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                                        <a href="#portfolio-details">
                                                            <img src={`${value.bigImage}`} alt="Portfolio" className="w-100"/>
                                                        </a>
                                            
                                                    </div>
                                                
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                   <h4 className="p-0">Videos</h4>
                                   <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4">
                                   <video className="video-set" width="300" height="200" controls>
                                            <source src="movie.mp4" type="video/mp4" />
                                            <source src="movie.ogg" type="video/ogg" />
                                            Your browser does not support the video tag.
                                            </video>
                                    

                                    </div>
                                    <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4">
                                    <video className="video-set" width="300" height="200" controls>
                                            <source src="movie.mp4" type="video/mp4" />
                                            <source src="movie.ogg" type="video/ogg" />
                                            Your browser does not support the video tag.
                                            </video>
                                    

                                    </div>
                                    
                                 
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Popupchat />
                <Appfooter /> 

            </Fragment>
        );
    }
}

export default Hotelsingle;