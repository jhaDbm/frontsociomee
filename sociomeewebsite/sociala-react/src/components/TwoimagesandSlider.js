import React, { Component } from 'react';
import "./createPost.css";
import Friendsilder from './Friendsilder';
import "./postview.css"
import Friends from './Friends';
import TwoImage from "../components/TwoImage"



class TwoimagesandSlider extends Component {
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
                  <Friends />
                  <Friendsilder />
                  
                  
                </div>
                <div class="col-sm-9 card">
                <TwoImage />
               
                </div>
             
                </div>
      
            

           

        );
    }
}

export default TwoimagesandSlider;