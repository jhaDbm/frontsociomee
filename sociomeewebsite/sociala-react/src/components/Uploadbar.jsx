import React from "react";
import "./uploadbar.css"
import {Link ,NavLink} from "react-router-dom"
import LinearProgress from "@material-ui/core/LinearProgress";
import ShowComments from "./ShowComments"

function Uploadbar(){
    const [progress , setProgress]= React.useState(50)
    const [bufferProgress ,setBufferProgress] = React.useState(60)
    return(
        <div className="LinarProgress">
            <h2>What do you wanna see in my upcoming videos?</h2>
            <p>Poll ends in 5 days</p>
        <div className="LinarProgress-set" >
            <span className="headding">Walkthroughs</span> 
            <span className="valueset">80%</span> 
            <LinearProgress color="primary" 
            variant="buffer"
             value={80} 
             className="progressset" />
             <ShowComments />
             <img src="assets/images/valueset.png" /> voat12
             </div>
             <div className="LinarProgress-set" >
            <span className="headding">Retro Games</span> 
            <span className="valueset">22%</span> 
            <LinearProgress color="primary" 
            variant="buffer"
             value={20} 
             className="progressset" />
             <ShowComments />
             <img src="assets/images/valueset.png" /> voat12
             </div>
             <div className="LinarProgress-set" >
            <span className="headding">Unboxings</span> 
            <span className="valueset">62%</span> 
            <LinearProgress color="primary" 
            variant="buffer"
             value={50} 
             className="progressset" />
             <ShowComments />
             <img src="assets/images/valueset.png" /> voat12
             </div>
             {/* <div className="card-body d-flex mt-3 mb-3 p-0">
            <Link href="/defaultvideo" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss "><i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i className="feather-heart text-white bg-red-gradiant me-1 btn-round-xs font-xss"></i>2.8K</Link>
            <Link href="/defaultvideo" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-md"></i>22 Comment</Link>
            <Link href="/defaultvideo" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-md"></i>11 Participants</Link>
            <Link href="/defaultvideo" className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-md"></i><span className="d-none-xs">Share</span></Link>
           </div> */}
           <div class="card-body d-flex p-0 mt-3 mb-3"><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a><a href="" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i><span class="d-none-xs">Share</span></a></div>
           <ShowComments />
           <div class="input-group"><input type="text" class="form-control enable" placeholder="Comments here.." /><div class="input-group-prepend">
          <div class="input-group-text btnsend">Send</div></div></div>
        </div>
       
    )
}
export default Uploadbar;