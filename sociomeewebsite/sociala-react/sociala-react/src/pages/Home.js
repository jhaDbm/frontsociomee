
import React, { Component , Fragment } from "react";
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
import Createpost from '../components/Createpost';
import Memberslider from '../components/Memberslider';
import Friendsilder from '../components/Friendsilder';
import Storyslider from '../components/Storyslider';
import Postview from '../components/Postview';
import Load from '../components/Load';
import Profilephoto from '../components/Profilephoto';
import Progressbar from '../components/Progressbar';




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
                                <div className="col-xl-9 col-xxl-10 col-lg-10">
                                    <Storyslider />
                                    <Createpost />
                                    <Postview id="32" postvideo="" postimage="ajay12.jpg" avater="ajay.jpg" className="postImage" user="Ajay jha"  time="22 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="32" postvideo="" postimage="arvind.jpg" avater="arvind.jpg" className="postImage" user="Arvind Tiwari"  time="22 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="31" postvideo="" postimage="mishra1.jpg" avater="mishra1.jpg" user="Achyuta" time="22 min ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="33" postvideo="" postimage="priyanshu.jpg" avater="priyanshu.jpg" user="Priyanshu" time="2 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Memberslider />
                                    <Postview id="35" postvideo="" postimage="saket.jpg" avater="saket.jpg" user="Saket" time="3 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Friendsilder />
                                    <Postview id="36" postvideo="" postimage="prveen.jpg" avater="prveen.jpg" user="Preveen" time="12 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="36" postvideo="" postimage="vivek.jpg" avater="vivek.jpg" user="Vivek Mishra" time="12 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="36" postvideo="" postimage="saddy.jpg" avater="saddy.jpg" user="Saddam" time="12 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="36" postvideo="" postimage="deva.jpg" avater="deva.jpg" user="Deva H.K.M" time="12 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="36" postvideo="" postimage="abhi.jpg" avater="abhi.jpg" user="Abhishek" time="12 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="36" postvideo="" postimage="kk.jpg" avater="kk.jpg" user="Abhi" time="12 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="36" postvideo="" postimage="anuj.jpg" avater="anuj.jpg" user="Anuj" time="12 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Postview id="36" postvideo="" postimage="golu.jpg" avater="golu.jpg" user="Golu" time="12 hour ago" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus." />
                                    <Load />
                                </div>




                                <div className="col-xl-3 col-xxl-3 col-lg-4 ps-lg-0 onlineFrnds">
                                    <Friends />
                                    <Contacts />
                                    <Group />
                                    <Events />
                                    <Profilephoto />
                                    <Progressbar />
                                    
                                    
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