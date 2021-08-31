import React, { Component } from 'react';
import "./createPost.css";
import "./postview.css"
import DynamicGallery from "../components/DynamicColumn";
import FriendsYouknow from './FriendsYouknow';




class VideoandGallery extends Component {
    state = {
        isOpen: false,
        disabled: true
    };
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        {
            this.setState({
                disabled: false
            });
        }
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        const menuClass = `${this.state.isOpen ? " show" : ""}`;

        return (
       

     
            <div class="row createpages">
                <div class="col-sm-3 card ">
                 <FriendsYouknow />
                 
                </div>
                <div class="col-sm-9 card">
                <DynamicGallery />
               
                </div>
             
                </div>
      
            

           

        );
    }
}

export default VideoandGallery;