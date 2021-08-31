import React from "react"
import "./multiplevido.css"

function Multiplevido(){
    return(
        <div
  className="video mt-5"
  style={{
         position: "relative",
         paddingBottom: "56.25%" /* 16:9 */,
         paddingTop: 25,
         height: 0
       }}
>
    <iframe
       style={{
             position: "absolute",
             top: 0,
             left: 0,
             width: "100%",
             height: "100%"
             }}
        src={'https://www.youtube.com/embed/hEnr6Ewpu_U?'}
        frameBorder="0"
    />
</div>
    )
}
export default Multiplevido;