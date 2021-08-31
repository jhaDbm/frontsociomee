import React, { Component } from 'react';
import "./createPost.css";
import Friendsilder from './Friendsilder';
import "./postview.css"
import SubLikePages2 from './SubLikepage2';
import ShowComments from "../components/ShowComments"
import NewComments from "../components/NewComments";
import Events from '../components/Events';



class Postview extends Component {
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
                  <SubLikePages2 />
                  <Events />
                  
                  
                </div>
                <div class="col-sm-9 card">
                <div class="card-body p-0 d-flex"><figure class="avatar me-3"><img src="assets/images/ajay.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1"> Saket <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500"> 3 hour ago</span></h4><div class="ms-auto pointer"><i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></div></div>
                <div className="postviewtext"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s</p></div>
                <img src="assets/images/ajay12.jpg" className="img-fliud postImg" />
                <ShowComments />
                <NewComments />
                <div class="card-body d-flex p-0 mt-0 mb-3"><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a><i class="feather-corner-down-right text-dark text-grey-900 btn-round-sm font-lg mt-3"></i>Reply<a href="" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"></a></div>
                <div class="input-group viewinput mb-3"><input type="text" class="form-control enable viewinput" placeholder="Comments Here.." /><div class="input-group-prepend"><div class="input-group-text btnsend">Send</div></div></div>         
                </div>
                
              
                </div>
      
            

           

        );
    }
}

export default Postview;