import React, { Component } from 'react';
import "./createPost.css";
import Friendsilder from './Friendsilder';
import "./postview.css"
import Livestrems from "../components/Livestrems";
import Profilephoto from './Profilephoto';
import  GameSection from "../components/GameSection"



class TrandingAndShotz extends Component {
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
                 <Profilephoto />
                  <GameSection />
                  
                </div>
                <div class="col-sm-9 card">
                <Livestrems />
               
                </div>
             
                </div>
      
            

           

        );
    }
}

export default TrandingAndShotz;