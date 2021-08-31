import { Avatar, ListItem, ListItemAvatar } from "@material-ui/core";
import React from "react";
import Comments from "./Comments";
import "./post2.css";

function Post2(){
    return(
        <div className="post">

        <div className="post-Header">
            <ListItem>
                {/* <ListItemAvatar>
                    <Avatar className="post_avtar" src="assets/images/ajay.jpg" alt="images">

                    </Avatar>
                </ListItemAvatar> */}
            </ListItem>
            
            <div className="post_comments">
                <Comments />
            </div>

        </div>
        </div>
    )

}
export default Post2