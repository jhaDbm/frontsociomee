import React from "react";
import "./checkbox.css"
import {Link , NavLink} from "react-router-dom"
import LinearProgress from "@material-ui/core/LinearProgress";
import ShowComments from "../components/ShowComments"

function CheckBox(){
  
    return(
        <div className="LinarProgress">
            <h2>What do you wanna see in my upcoming videos?</h2>
            <p>Poll ends in 5 days</p>
 <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
  Retro Games
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label class="form-check-label" for="flexRadioDefault2">
  Walkthroughs
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label class="form-check-label" for="flexRadioDefault2">
  Unboxings
  </label>
</div>
<div className="btn-section">
      <button type="submit" className="btn1"> vote Now !</button> 
      <button type="submit" className="btn2">See Result</button>      
 </div>
<div class="card-body d-flex p-0 mt-3 mb-3"><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a><a href="" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i><span class="d-none-xs">Share</span></a></div>
<ShowComments />
<div class="input-group"><input type="text" class="form-control enable" placeholder="Search your Friends here.." /><div class="input-group-prepend">
          <div class="input-group-text btnsend">Send</div></div></div>
 </div>
       
    )
}
export default CheckBox;