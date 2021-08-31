import React, { Component , Fragment } from "react";
import { Link , NavLink } from 'react-router-dom';
import "./forgotpass.css"



class Forgot extends Component {
    constructor(props){
        super(props);
        this.state={

        }
       

    }
    handelChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handelsubmit=(event)=>{
        alert(JSON.stringify(this.setState));
        event.preventDefault()

    }
    render() {
        return (
            <Fragment> 
                <div className="main-wrap">
                    <div className="nav-header bg-transparent shadow-none border-0">
                        <div className="nav-top w-100">
                        <Link to="/"><i className=" text-success display2-size me-3 ms-0"><img src="https://ecodeacademy.com/sociomee/img/favicon.png" className="sublogo" /></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0"><img src="https://ecodeacademy.com/sociomee/img/logo.png" className="sublogo"/></span> </Link>
                            <button className="nav-menu me-0 ms-auto"></button>
            
                            <a href="/login" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl forgotBtn">Login</a>
                            <a href="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl forgotBtn">Register</a>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xl-7 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat">
                      <img src="https://front.sociomee.com/static/media/login-v2.da80012f.svg" /></div>

                        <div className="col-xl-5 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                            <div className="card shadow-none border-0 ms-auto me-auto login-card">
                            <div className="card-body rounded-0 text-center">
                                        <h2 className=" display1-size display2-md-size mb-5 loginHeading">Change Your Password</h2>
                                        <form onSubmit={this.handelsubmit}>
                                        
                                        <div className="form-group icon-input mb-3">
                                            <input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" name="old" onChange={this.state.handelChange} value={this.state.old} placeholder="Old Password" />
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        </div>
                                        <div className="form-group icon-input mb-1">
                                            <input type="Password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" name="new" onChange={this.state.handelChange} value={this.state.new} placeholder="New Password" />
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        </div>
                                        <div className="form-check text-left mb-3">
                                            <input type="checkbox" className="form-check-input mt-2" id="exampleCheck4" />
                                            <label className="form-check-label font-xsss text-grey-500">Accept Term and Conditions</label>
                                        </div>
                                    </form>
                                    
                                    <div className="col-sm-12 p-0 text-left">
                                        <div className="form-group mb-1"><a href="/login" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 forgotBtn" type="submit">Change Password</a></div>
                                        
                                    </div>
                                    
                                </div>
                            </div> 
                        </div>
                        
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Forgot;