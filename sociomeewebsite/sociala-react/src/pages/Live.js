import React, { Component , Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import "./live.css"

class Live extends Component {
    render() {
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0" style={{maxWidth: "95%"}}>
                           <div class="row">
                               <div className="col-xl-3 col-xxl-3 col-lg-3 select-set">
                               <select class="form-select" aria-label="Default select example">
                                <option selected>Select All Satrems</option>
                                <option value="1">Technology Streams</option>
                                <option value="2">Educational Streams</option>
                                <option value="3">Entertainment Strems</option>
                                </select>
                               </div>
                               <div className="col-xl-3 col-xxl-3 col-lg-3 select-set">
                               <select class="form-select" aria-label="Default select example">
                                <option selected>Select Viewers Type</option>
                                <option value="1">Viewers(Ascending)</option>
                                <option value="2">Viewers(Decending)</option>
                               
                                </select>
                               </div>
                               <div className="col-xl-3 col-xxl-3 col-lg-3 select-set">
                               <select class="form-select" aria-label="Default select example">
                                <option selected>Select Events</option>
                                <option value="1">Most Recent</option>
                                <option value="2">This Week</option>
                                <option value="3">This Months</option>
                                </select>
                               </div>
                               <div className="col-xl-3 col-xxl-3 col-lg-3">
                                   <button type="submit" className="form-control strems">Fillter Strems</button>
                               </div>
                           </div>
                            <div className="row">
                                <div className="col-xl-4 col-xxl-4 col-lg-4">
                                    <div className="card border-0 video-img mb-0 rounded-3 overflow-hidden chat-wrapper bg-image-center bg-image-cover" 
                                    style={{backgroundImage: `url("assets/images/ajayjha.jpg")`}}>
                                         <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                                            <span className="live-tag position-absolute left-15 mt-2 bottom-0 mb-4 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
                                        </div>
      
                                    </div>
                                    <img src="assets/images/ajay.jpg" className="avtar" />
                                           <span className="text-img">I'm Playing Athena’s Story
                                            Rosie Sakura  Just Now</span>
                                </div>
                                <div className="col-xl-4 col-xxl-4 col-lg-4">
                                    <div className="card border-0 mb-0 video-img rounded-3 overflow-hidden chat-wrapper bg-image-center bg-image-cover" 
                                    style={{backgroundImage: `url("assets/images/ajay12.jpg")`}}>
                                        <div className="card-body position-absolute mt-0 ms-0 left-0">
                                         
                                        </div>
                                        <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                                        <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                                            <span className="live-tag position-absolute left-15 mt-2 bottom-0 mb-4 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
                                        </div>
                                        </div>
                                    </div>
                                    <img src="assets/images/ajay.jpg" className="avtar" />
                                           <span className="text-img">I'm Playing Athena’s Story
                                            Rosie Sakura  Just Now</span>
                                </div>
                                <div className="col-xl-4 col-xxl-4 col-lg-4">
                                    <div className="card border-0 video-img mb-0 rounded-3 overflow-hidden chat-wrapper bg-image-center bg-image-cover" 
                                    style={{backgroundImage: `url("assets/images/ajayjha.jpg")`}}>
                                        <div className="card-body position-absolute mt-0 color-red ms-0 left-0">
                                         
                                        </div>
                                        <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                                            <span className="live-tag position-absolute left-15 mt-2 bottom-0 mb-4 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
                                        </div>
                                    </div>
                                    <img src="assets/images/ajay.jpg" className="avtar" />
                                           <span className="text-img">I'm Playing Athena’s Story
                                            Rosie Sakura  Just Now</span>
                                </div>
                                <div className="col-xl-4 col-xxl-4 col-lg-4">
                                    <div className="card border-0 mb-0 video-img rounded-3 overflow-hidden chat-wrapper bg-image-center bg-image-cover" 
                                    style={{backgroundImage: `url("assets/images/ajay12.jpg")`}}>
                                         <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                                            <span className="live-tag position-absolute left-15 mt-2 bottom-0 mb-4 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
                                        </div>
                                        
                                    </div>
                                    <img src="assets/images/ajay.jpg" className="avtar" />
                                           <span className="text-img">I'm Playing Athena’s Story
                                            Rosie Sakura  Just Now</span>
                                </div>
                                <div className="col-xl-4 col-xxl-4 col-lg-4">
                                    <div className="card border-0 mb-0 video-img rounded-3 overflow-hidden chat-wrapper bg-image-center bg-image-cover" 
                                    style={{backgroundImage: `url("assets/images/ajay12.jpg")`}}>
                                        <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                                            <span className="live-tag position-absolute left-15 mt-2 bottom-0 mb-4 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
                                        </div>
                                        
                                    </div>
                                    <img src="assets/images/ajay.jpg" className="avtar" />
                                           <span className="text-img">I'm Playing Athena’s Story
                                            Rosie Sakura  Just Now</span>
                                </div>
                                <div className="col-xl-4 col-xxl-4 col-lg-4">
                                    <div className="card border-0 mb-0 video-img rounded-3 overflow-hidden chat-wrapper bg-image-center bg-image-cover" 
                                    style={{backgroundImage: `url("assets/images/ajay12.jpg")`}}>
                                         <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                                            <span className="live-tag position-absolute left-15 mt-2 bottom-0 mb-4 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
                                        </div>
                                        
                                    </div>
                                    <img src="assets/images/ajay.jpg" className="avtar" />
                                           <span className="text-img">I'm Playing Athena’s Story
                                            Rosie Sakura  Just Now</span>
                                </div>

                                <div className="col-xl-4 col-xxl-4 col-lg-4">
                                    <div className="card border-0 video-img mb-0 rounded-3 overflow-hidden chat-wrapper bg-image-center bg-image-cover" 
                                    style={{backgroundImage: `url("assets/images/ajay12.jpg")`}}>
                                        <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                                            <span className="live-tag position-absolute left-15 mt-2 bottom-0 mb-4 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
                                        </div>
                                        
                                    </div>
                                    <img src="assets/images/ajay.jpg" className="avtar" />
                                           <span className="text-img">I'm Playing Athena’s Story
                                            Rosie Sakura  Just Now</span>
                                </div>
                                <br></br>
                                <div className="col-xl-4 col-xxl-4 col-lg-4">
                                    <div className="card border-0 video-img mb-0 rounded-3 overflow-hidden chat-wrapper bg-image-center bg-image-cover" 
                                    style={{backgroundImage: `url("assets/images/ajay12.jpg")`}}>
                                        <div className="card-body position-absolute mt-0 ms-0 left-0">
                                         
                                        </div>
                                        <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                                            <span className="live-tag position-absolute left-15 mt-2 bottom-0 mb-4 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
                                        </div>
                                    </div>
                                    <img src="assets/images/ajay.jpg" className="avtar" />
                                           <span className="text-img">I'm Playing Athena’s Story
                                            Rosie Sakura  Just Now</span>
                                </div>
                                <div className="col-xl-4 col-xxl-4 col-lg-4">
                                    <div className="card border-0 mb-0 video-img rounded-3 overflow-hidden chat-wrapper bg-image-center bg-image-cover" 
                                    style={{backgroundImage: `url("assets/images/ajay12.jpg")`}}>
                                         <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                                            <span className="live-tag position-absolute left-15 mt-2 bottom-0 mb-4 bg-danger p-2 z-index-1 rounded-3 text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
                                        </div>
                                        
                                    </div>
                                    <img src="assets/images/ajay.jpg" className="avtar" />
                                           <span className="text-img">I'm Playing Athena’s Story
                                            Rosie Sakura  Just Now</span>
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

export default Live;