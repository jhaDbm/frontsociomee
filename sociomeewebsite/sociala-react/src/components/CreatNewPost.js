
import "./createnewpost.css";
import React , {useState} from "react"
import UpdateCreatePost from "../components/UpdateCreatePost";
function CreateNewPost()
{
    const [openModel, SetOpenModel] = useState(false)
    return(
    <div className="createnewpost">
        <button className="openModalBtn" onClick={()=>{
            SetOpenModel(true)
        }}>Create Post</button>
        { openModel && <UpdateCreatePost CloseModel={SetOpenModel} />}
      
      
    </div>
    )
}
export default CreateNewPost;