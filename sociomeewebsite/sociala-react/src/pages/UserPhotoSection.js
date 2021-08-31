import React, {useState} from 'react'
import "./photoslide.css";
import Images from "./Images"


function UserPhotoSection()
{
 
    const [selectImages, setSelectImages] = useState(Images[1]);
    return(
    <div className="App">
        <div  className="container">
            <img src={selectImages} alt="selected"  className="selected" />

            <div className="imgContainer flex-container">
           {Images.map((img,index)=>(
           <img style={{border : selectImages === img ? "4px solid purple" :""}}
            key={index}
             src={img} 
             alt="some"
             onClick={()=>setSelectImages(img)}
             />
             
           ))}
            </div>

            
        </div>

    </div>
           
           
    )
}
export default UserPhotoSection;