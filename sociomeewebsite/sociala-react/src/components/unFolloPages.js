import "./editprofile.css";
import React , {useState} from "react"
import Block from "./View";
function Unfollow()
{
    const [openModel, SetOpenModel] = useState(false)
    return(
    <div className="unfollow">
        <button className="openModalBtn" onClick={()=>{
            SetOpenModel(true)
        }}>...</button>
        { openModel && <Block CloseModel={SetOpenModel} />}
      
      
    </div>
    )
}
export default Unfollow;