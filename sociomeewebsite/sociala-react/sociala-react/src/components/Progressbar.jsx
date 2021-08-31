import React from "react"
import "./progressbar.css"
import CircularProgressBar from "circular-progress-bar";
const progresbar =(props)=>{
const {score,value,d} = props;
return(
    <div class="container d-flex justify-content-center padding">
    <div class="row">
        <div class="col-md-9 col-sm-6">
            <div class="progress blue"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
                <div class="progress-value">85%</div>
            </div>
        </div>
        <div className="progressbartext">
        <h4>Profile Completion</h4>
      <h5>Marina Valentine</h5>
      <p className="subtxt">Completed your profile</p>
        </div>
      
    </div>
</div>
);
   
  
};
export default progresbar;