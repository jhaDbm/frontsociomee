
import React, { Component , Fragment } from "react";
import { Link ,NavLink } from "react-router-dom";
import "./home.css"
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import Friends from '../components/Friends';
import Contacts from '../components/Contacts';
import Group from '../components/Group';
import Events from '../components/Events';
import Reaction from '../components/Reaction';
import Createpost from '../components/Createpost';
import Memberslider from '../components/Memberslider';
import Friendsilder from '../components/Friendsilder';
import Storyslider from '../components/Storyslider';
import Postview from '../components/Postview';
import Load from '../components/Load';
import Profilephoto from '../components/Profilephoto';
import Progressbar from '../components/Progressbar';
import 'video-player-for-react/dist/index.css'
import Trandes from "../components/Trandes";
import Shotz from "../components/Shotz"
import Livestrems from "../components/Livestrems";
import Gallery from "../components/Gallery";
import Uploadbar from "../components/Uploadbar";
import CheckBox from "../components/Checkbox";
import { colors } from "@material-ui/core";
import UserPhotoSection from "./UserPhotoSection";
import TwoImages from "../components/TwoImage";
import ThreeImage from "../components/ThreeImage";
import EventPopUp from "../components/EventPopUp";
import Popup from "../components/Popup";
import LikePages from "../components/LikePages";
import SuggustFriends from "../components/SuggustFriends";
import Comments from "../components/Comments";
import Post2 from "../components/Post2";
import ShowCommets from "../components/ShowComments";
import DynamicGallery from "../components/DynamicColumn";
import FriendsYouknow from "../components/FriendsYouknow"
import TwoimagesandSlider from "../components/TwoimagesandSlider"
import ThreeImagesandFollwers from "../components/ThreeImagesandFollwers";
import VideoandGallery from "../components/VideoandGallery";
import TrandingAndProfilePhoto from "../components/TrandingAndProfilePhoto";
import ShotzandProgressbar from "../components/ShotzandProgressbar"



class Home extends Component {
    render() {
        
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="row feed-body">
                            <div className="col-xl-12 col-xxl-12 col-lg-12">
                                    <Storyslider />
    
                            </div>
                            
                                 
                           <div className="col-xl-10 col-xxl-10 col-lg-10 imagesetting">
                                    <Createpost />
                                  
                                  <br></br>
                              
                                    <Postview />
                                   
                                    <br></br>
                                   
                                <TwoimagesandSlider />
                                   

                                    <br></br>
                                    <ThreeImagesandFollwers />

                                    <br></br>
                                   <VideoandGallery />
                                  <br></br>

                                    <TrandingAndProfilePhoto />
                                   

                                    <br></br>
                                    <ShotzandProgressbar />
                                  
                                 
                                     <Load />
                                </div>

                            <div className="col-xl-2 co2-xxl-2 col-lg-2 ps-lg-0 onlineFrnds">
                                      <Popup />
                                     {/* <LikePages /> */}
                                    <Group />
                                    {/* <Events /> */}
                                 
                                    <Progressbar /> 
                                    <h2>Shotz</h2>
                                    <Shotz />
                                    
                                    <Trandes />

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

export default Home;