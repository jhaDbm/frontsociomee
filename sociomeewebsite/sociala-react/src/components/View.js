import { Cancel, Person, PersonAdd } from "@material-ui/icons";
import React from "react"
import "./view.css";




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
            <Person />
            <span className="posttxt">Edit</span>
                
            </li>
            <li class="list-group-item d-flex  ">
      <PersonAdd />
      <span className="posttxt">View</span>
  
  </li>
 






 
 
        </ul>
        </div>
        
        </div>
    )
}
export default Model;