
import "./popup.css";
import React , {useState} from "react"
import Model from "../components/Model";
function Popup()
{
    const [openModel, SetOpenModel] = useState(false)
    return(
    <div className="card popup">
        <img src="assets/images/birthday-bg.jpg"  className="birthdayImg"/>
        <h3 className="hedding">Today's 5 Friends Birthday</h3>
        <button className="openModalBtn" onClick={()=>{
            SetOpenModel(true)
        }}>See More</button>
        { openModel && <Model CloseModel={SetOpenModel} />}
    </div>
    )
}
export default Popup;