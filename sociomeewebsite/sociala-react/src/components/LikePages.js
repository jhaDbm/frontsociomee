import "./likePages.css";
import React , {useState} from "react"
import SubLikePages from "../components/SubLikePages";
function LikePages()
{
    const [openModel, SetOpenModel] = useState(false)
    return(
    <div className="card popup">
        <img src="assets/images/birthday-bg.jpg" className="likepageImg" />
        <h3>You are Like 50+ Pages</h3>
        <button className="openModalBtn" onClick={()=>{
            SetOpenModel(true)
        }}><span className="likeHeading">See All Pages</span></button>
        { openModel && <SubLikePages CloseModel={SetOpenModel} />}
    </div>
    )
}
export default LikePages;