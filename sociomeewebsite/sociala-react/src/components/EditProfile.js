import "./editprofile.css";
import React , {useState} from "react"
import View from "../components/View";
function EdidProfile()
{
    const [openModel, SetOpenModel] = useState(false)
    return(
    <div className="edidProfile">
        <button className="openModalBtn" onClick={()=>{
            SetOpenModel(true)
        }}>...</button>
        { openModel && <View CloseModel={SetOpenModel} />}
      
      
    </div>
    )
}
export default EdidProfile;