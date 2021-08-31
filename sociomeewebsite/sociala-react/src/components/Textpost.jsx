import React from "react"
import {Link , NavLink } from "react-router-dom"
import './post.css'
import LocationOn from '@material-ui/icons/LocationOn';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import AlbumIcon from '@material-ui/icons/Album';
import AddIcon from '@material-ui/icons/Add';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import EventIcon from '@material-ui/icons/Event';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import PollIcon from '@material-ui/icons/Poll';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';


function Post(){
    return(
        <div className="post_Main_content">
           <h2>Hi Dhirendra</h2>
                <div className="card-body p-0 mt-3 position-relative">
                    <figure className="avatar position-absolute ms-2 mt-1 top-5"><img src="assets/images/img3.jpg" alt="icon" className="shadow-sm rounded-circle w30" /></figure>
                   <Link to="/textpost"><textarea name="message" className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg" cols="30" rows="10" placeholder="What's on your mind? #Hastag @Mention "></textarea></Link> 
                </div>
<ul class="list-group">

  <li class="list-group-item d-flex  ">
 <LocationOn />
 <span className="posttxt">Location</span>
    
  </li>
  <li class="list-group-item d-flex  ">
   <LocalOfferIcon /> 
   <span className="posttxt">Tags</span>
   
  </li>
  <li class="list-group-item d-flex ">
    <FindInPageIcon /> 
<select class="form-select" aria-label="Default select example">
  <option selected>who can Show My Post</option>
  <option value="1">Public</option>
  <option value="2">Private</option>
</select>
  </li>
  <li class="list-group-item d-flex">
   <TimelapseIcon /> 
   <select class="form-select" aria-label="Default select example">
  <option selected>Scheduled Your Post</option>
  <option value="1">Now</option>
  <option value="2">After</option>
</select>
  </li>
  
  <li class="list-group-item d-flex ">
<AccessibilityNewIcon />
 <span className="posttxt">Threat</span>
  </li>
  
  <li class="list-group-item d-flex ">
   <AddIcon /> 
   <span className="posttxt">Add Your Post</span>
   
  </li>
  <li class="list-group-item d-flex ">
      <ChatBubbleOutlineIcon />
    
    <span className="posttxt">Comments</span>
    <div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary btn">Allow</button>
 
</div>
  </li>
 
</ul>      
 </div>
    )
}
export default Post;