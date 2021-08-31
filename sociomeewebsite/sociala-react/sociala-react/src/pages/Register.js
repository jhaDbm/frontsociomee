import React, { Component , Fragment } from "react";
import { Link , NavLink } from 'react-router-dom';
import "./register.css"


class Register extends Component {
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
            
                            <Link to="/login" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl RegBtn">Login</Link>
                            <Link to="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl RegBtn ">Register</Link>
                        </div>
                    </div>

                    <div className="row">
                    <div class="container register">
                <div class="row">
                <div className="col-xl-5 d-none d-xl-block p-10 vh-50 bg-image-cover bg-no-repeat bgsetting">
                        <img src="https://front.sociomee.com/static/media/register-v2.24c0a62e.svg" alt=""/>
                        
                    </div>
                    <div class="col-md-7 register-right">
                   
                        <div class="tab-content" id="myTabContent">
                            
                            
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <form onSubmit={this.handelsubmit}>
                            {/* <div className="card-body rounded-0 text-center">
                            <h2 className=" display1-size display2-md-size mb-0">Adventure starts here</h2>
                            </div> */}
                                <div class="row register-form">
                                   
                                    <div class="col-md-6">
                                    <div className="form-group icon-input mb-3 input_set">
                                        <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                            <input type="text" class="form-control form-control_set" placeholder="First Name *" name="fname" onChange={this.state.handelChange} value={this.state.fname} />
                                        </div>
                                        <div className="form-group icon-input mb-3 input_set">
                                        <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                        <input type="text" class="form-control form-control_set" placeholder="Last Name *" name="lname" onChange={this.state.handelChange} value={this.state.lname} />
                                            
                                        </div>
                                        <div className="form-group icon-input mb-3 input_set">
                                        <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                        <input type="text" class="form-control form-control_set" placeholder="User Name *" name="username" onChange={this.state.handelChange} value={this.state.username} />
                                      
                                        </div>
                                        <div class="form-group">
                                        <div className="form-group icon-input mb-3 input_set">
                                        <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                        <input type="email" class="form-control form-control_set" placeholder="Your Email *" name="email" onChange={this.state.handelChange} value={this.state.email} />
                                        </div>   
                                        </div>
                                       
                                        <div className="form-group icon-input mb-3 input_set">
                                        <i className="font-sm ti-mobile text-grey-500 pe-0"></i>
                                        <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control form-control_set" placeholder="Your Phone *" name="phone" onChange={this.state.handelChange} value={this.state.phone} />
                                       
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                    <div className="form-group icon-input mb-3 input_set">
                                    <select class="form-control other_set icon-input mb-2 input_set">
                                          <i className="font-sm ti-mobile text-grey-500 pe-0"></i>
                                                <option class="hidden form-control_set "  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div className="form-group icon-input mb-3 input_set">
                                        <i className="font-sm ti-write text-grey-500 pe-0"></i>
                                            <input type="text" class="form-control form-control_set" placeholder="Enter Your Answer *" name="answer" onChange={this.state.handelChange} value={this.state.answer} />
                                        </div>
                                        <div className="form-group icon-input mb-3 input_set">
                                        <select class="form-control other_set icon-input mb-2 input_set">
                                          <i className="font-sm ti-mobile text-grey-500 pe-0"></i>
                                                <option class="hidden form-control_set "  selected disabled>Please select your Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                        <div className="form-group icon-input mb-3 input_set">
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                            <input type="password" class="form-control form-control_set" placeholder="Password *" name="password" onChange={this.state.handelChange} value={this.state.password} />
                                        </div>   
                                        </div>
                                       
                                        <div className="form-group icon-input mb-3 input_set">
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                            <input type="password" class="form-control form-control_set" placeholder="Confirm Password *" name="cpass" onChange={this.state.handelChange} value={this.state.cpass} />
                                       
                                        </div>
                                       
                                    </div>

                                    <input type="submit" class="btnRegister"   value="Register"/>
                                    <p className="reglogin">Have an Account <Link to="/Login" >Login</Link></p>
                                </div>
                                </form>
                                
                            </div> 

                            {/* <form> */}
                             
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

export default Register;