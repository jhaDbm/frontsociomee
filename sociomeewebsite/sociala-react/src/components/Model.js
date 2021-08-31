import { Cancel } from "@material-ui/icons";
import React from "react"
import "./model.css";


function Model({CloseModel})
{
    return(
        <div className="modalbackground">
        <div className="modelContainer">
            <button onClick={()=>CloseModel()} className="cross">
                <Cancel />
            </button>
            <div ><h4>Wishing the Birthday Person</h4></div>
            <ul class="list-group personList">
            <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0"><figure class="avatar me-3"><img src="assets/images/img3.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Dhirendra jha <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4></div>
            <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0"><figure class="avatar me-3"><img src="assets/images/img3.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Dhirendra jha <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4></div>
            <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0"><figure class="avatar me-3"><img src="assets/images/img3.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Dhirendra jha <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4></div>
            <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0"><figure class="avatar me-3"><img src="assets/images/img3.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Dhirendra jha <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4></div>
            <div class="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0"><figure class="avatar me-3"><img src="assets/images/img3.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1">Dhirendra jha <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4></div>
        </ul>
        </div>
        </div>
    )
}
export default Model;