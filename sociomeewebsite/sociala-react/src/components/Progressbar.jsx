import React from "react"
import "./progressbar.css"
import CircularProgressBar from "circular-progress-bar";
const progresbar =(props)=>{
return(
    <div class="container d-flex justify-content-center padding">
    <div class="row">
        <div class="col-md-9 col-sm-6  ">
            <div class="progress blue"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
                <div class="progress-value">85%</div>
            </div>
        </div>
        <div className="progressbartext">
        <h4>Profile Completion</h4>
      <h5>Marina Valentine</h5>
      <p className="subtxt">Complete your profile by </p>
        </div>
        {/*  */}
        {/* <div className="card w-100 shadow-xss rounded-xxl text-center poststatus1 ">
                <div className="d-flex align-items-center">
                <h2 className="heading">Our Followers</h2>
                    <hr></hr>
                </div>
                <div className=" d-block pt-0 pb-2 ">
                    <div className=" d-flex pt-0 ps-1 pe-4 pb-3 text-center overflow-hidden">
                    <div className="ps-3 pe-3">
                   
                     <span className="reaction-text">12.642</span>
                     <p>POST</p>
                   
                    </div>
                    <div className="ps-3 pe-3">
                    
                    <span className="reaction-text">8.913</span>
                    <p>FOLLOW</p>
                    </div>
                    </div>
                    <div className="d-flex pt-0 ps-1 pe-4 pb-3 text-center overflow-hidden">
                    <div className="ps-3 pe-3">
                    
                     <span className="reaction-text">12.642</span>
                     <p>INTREST</p>
                   
                    </div>
                    <div className="ps-3 pe-3">
                  
                    <span className="reaction-text">8.913</span>
                    <p>SHARES</p>
                    </div>
                    </div>
                    
                </div>
            </div> */}
       
      
    </div>
</div>
);
   
  
};
export default progresbar;