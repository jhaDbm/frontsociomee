import { Cancel } from "@material-ui/icons";
import React from "react"
import "./updatecreatepost.css";
import PermMediaIcon from '@material-ui/icons/PermMedia';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AlbumIcon from '@material-ui/icons/Album';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import EventIcon from '@material-ui/icons/Event';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import PollIcon from '@material-ui/icons/Poll';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';


function Model({CloseModel})
{
    return(
        <div className="modalbackground">
        <div className="modelContainer">
        <button onClick={()=>CloseModel()} className="cross">
                <Cancel />
            </button>
            <ul class="list-group personList">
            <li class="list-group-item d-flex  ">
            <PermMediaIcon />
            <span className="posttxt">Media</span>
                
            </li>
            <li class="list-group-item d-flex  ">
      <LiveTvIcon />
      <span className="posttxt">Go Live</span>
  
   
  </li>
  <li class="list-group-item d-flex  ">
   <LocalOfferIcon /> 
   <span className="posttxt">Tags</span>
   
  </li>
  <li class="list-group-item d-flex ">
    <VolumeMuteIcon /> 
    <span className="posttxt">Podcast</span>
  </li>
  <li class="list-group-item d-flex">
   <WhatshotIcon /> 
   <span className="posttxt">Shots</span>
  </li>
  <li class="list-group-item d-flex ">
   <AlbumIcon /> 
   <span className="posttxt">Recommendation</span>
   
  </li>
  <li class="list-group-item d-flex ">
<AccessibilityNewIcon />
    
    <span className="posttxt">Threat</span>
  </li>
  <li class="list-group-item d-flex ">
      <ThreeSixtyIcon />
    
    <span className="posttxt">Thought</span>
  </li>
  <li class="list-group-item d-flex ">
      <EventIcon />
    
    <span className="posttxt">Event</span>
   
  </li>
  <li class="list-group-item d-flex ">
    <SubdirectoryArrowRightIcon />  
    
    <span className="posttxt">Blog</span>
  </li>
  
  <li class="list-group-item d-flex ">
      <PollIcon />
    
    <span className="posttxt">Poll</span>
   
  </li>
  <li class="list-group-item d-flex ">
      <MoneyOffIcon />
    <span className="posttxt">Sell</span>
  </li>
        </ul>
        </div>
        
        </div>
    )
}
export default Model;