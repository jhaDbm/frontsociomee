import React, { Component } from 'react';
import "./createPost.css";
import "./postview.css"
import ThreeImages from "../components/ThreeImage";
import Reaction from "../components/Reaction"
// import Shotz from "../components/Shotz";




class ThreeImagesandFollwers extends Component {
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
                 <Reaction />
               {/* <Shotz /> */}
                  
                </div>
                <div class="col-sm-9 card">
                <ThreeImages />
               
                </div>
             
                </div>
      
            

           

        );
    }
}

export default ThreeImagesandFollwers;