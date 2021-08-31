import React, { Component } from 'react';
import "./createPost.css";
import Post from "./Post"
import { Link, NavLink } from "react-router-dom"
import PublicIcon from '@material-ui/icons/Public';
import { ChromePicker, SketchPicker } from 'react-color'
import CreeatNewPost from "../components/CreatNewPost"
import EdidProfile from './EditProfile';
import unFollowPages from "./unFolloPages"
import Setinput from "../components/Setinput"
// import SelectValue from "../components/SelectValue"


class Createpost extends Component {
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
                <div class="col-sm-3  card ">
                    <img src="assets/images/img42.jpg" className="rounded-circle profileImages img-fluid "/>
                    <div className=" persondetails">
                    <h2>Siddhant❤️</h2>
                    <span>Siddhant@gmail.com</span>
                    </div>
                    <div className="paragraph">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div class="container">
                    <div class="row showdata">
                    <div class="col-md-4 col-ms-4" ><h2>546</h2><p>Following</p> </div>
                    <div class="col-md-4 col-ms-4"><h2>2633</h2><p>Likes</p></div>
                    <div class="col-md-4 col-ms-4"><h2>6845</h2><p>Followers</p></div>
                    </div>  
                    <button className="viewProfile">View Profile</button>
                </div>
               
                </div>
                <div class="col-sm-9 card">
                <div className="row createItems">
                    
                    <div className="col-md-3">
                        <Link ><i className="btn-round-sm font-xs text-primary feather-edit-3"></i><CreeatNewPost /></Link>
                    </div>
                    <div className="col-md-3 txthedding">
                        <select title="Select your surfboard" class="selectpicker txthedding1">
                            <option>🌐Public</option>
                            <option>🧍Friends</option>
                            <option>👱Friends Except</option>
                            <option>🙎‍♂️Spacific Friends</option>
                            <option>🧍Only Me</option>
                        </select>
                        {/* <SelectValue /> */}
                    </div>
                    <div className="col-md-3"><Link to="/defaultlive" className="font-xssss fw-600 text-black-500 card-body p-0 d-flex align-items-center"><i className="btn-round-sm font-xs text-primary feather-youtube "></i><sapn className="txthedding">Go Live</sapn></Link></div>
                    <div className="col-md-3"><Link to="/defaultevent" className="font-xssss fw-600 text-black-500 card-body p-0 d-flex align-items-center"><i className="btn-round-sm font-xs text-primary feather-globe "></i><sapn className="txthedding">Check In</sapn></Link></div>
                    <div className="col-md-3">
                    <span className="editProfile">
                        <unFolloPages />
                    </span>
                    </div>
                    <div className="row">
                    <div className="card-body p-0 mt-3 position-relative">
                    <figure className="avatar position-absolute ms-2 mt-1 top-5"><img src="assets/images/img3.jpg" alt="icon" className="shadow-sm rounded-circle w30 " /></figure>
                    <Link to=""><textarea name="message" value={this.state.message} onChange={this.handleChange} className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg" cols="30" rows="10" type="text" placeholder="What's on your mind?"></textarea></Link>
                    <Setinput/>
                    
                </div>

            <div className="col-md-3">


                <span class="hiddenFileInput">
                    <input type="file" name="theFile" />
                </span>
            </div>
        <div className="col-md-3">
            <Link to="#activity" className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"><i className="font-md text-warning feather-camera me-2"></i><span className="d-none-xs">Feeling/Activity</span></Link>
                </div>
        <div className="col-md-3">
            <Link to="#activity" className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"><i className="font-md text-warning feather-tag me-2"></i><span className="d-none-xs">#Tag</span></Link>
        </div>
            <div className="col-md-3 dotset">
                <div>
                    <EdidProfile />
                    </div>
            </div>
            <form>
                <div class="form-row align-items-center creteinpt">
                    <div class="col-sm-12 my-1">
                        <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text" disabled={this.state.disabled}>@</div>
                            </div>
                            <input type="text" class="form-control enable" disabled={this.state.disabled} placeholder="Search your Friends here.." />
                        </div>
                    </div>
                </div>
            </form>

            <button className="postbtn" type="submit" disabled={this.state.disabled}>Post</button>
        {/* <SketchPicker /> */}
        </div>
        </div>               
        </div>
        </div>
      
            

           

        );
    }
}

export default Createpost;