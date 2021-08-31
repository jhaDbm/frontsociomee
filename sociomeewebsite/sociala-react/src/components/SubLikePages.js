import { CallSplitRounded, Cancel, Close, ClosedCaption } from "@material-ui/icons";
import React from "react"
import "./model.css";


function SubLikePages({CloseModel})
{
    return(
        <div className="modalbackground">
        <div className="modelContainer">
           
            <div ><h3>Your Like Pages</h3><span className="subtext">18 Page Like</span></div>
            <ul class="list-group personList">
            <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0"><figure class="avatar me-3"><img src="assets/images/likepage1.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Chrimson Agency<span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">Clothing Store</span></h4></div>
            <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0"><figure class="avatar me-3"><img src="assets/images/likepage2.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Digital Pixel <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">Software Company</span></h4></div>
            <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0"><figure class="avatar me-3"><img src="assets/images/likepage3.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">The Angle Bar <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">The Disco Bar</span></h4></div>
            <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0"><figure class="avatar me-3"><img src="assets/images/likepage4.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Fivestar Food <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">Resturent</span></h4></div>
            <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0"><figure class="avatar me-3"><img src="assets/images/likepage5.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Royal Watch <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">Watch Shop</span></h4></div>
        </ul>
        </div>
        </div>
    )
}
export default SubLikePages;