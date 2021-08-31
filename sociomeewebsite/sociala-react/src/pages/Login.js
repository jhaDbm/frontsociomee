import React, { Component , Fragment } from "react";
import { Link , NavLink } from 'react-router-dom';
import "./login.css"



class Login extends Component {
    constructor(props){
super(props)
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
                <div className="container-fluid">
                <div className="main-wrap">
                    <div className="nav-header bg-transparent shadow-none border-0">
                        <div className="nav-top w-100">
                        <Link to="/"><i className=" text-success display2-size me-2 ms-0"><img src="https://ecodeacademy.com/sociomee/img/favicon.png" className="sublogo" /></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0"><img src="https://ecodeacademy.com/sociomee/img/logo.png" className="sublogo"/></span> </Link>
                            <button className="nav-menu me-0 ms-auto"></button>
            
                            <Link to="/login" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</Link>
                            <Link to="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl loginBtn">Register</Link>
                        </div>
                    </div>
                    <form onSubmit={this.handelsubmit}>
                    <div className="row">
                        <div className="col-xl-7 d-none d-xl-block p-10 vh-100 bg-image-cover bg-no-repeat bgsetting">
                            <img src="http://localhost:3002/static/media/login-v2.da80012f.svg"/>
                        </div>
                            <div className="col-xl-4 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                                <div className="card shadow-none border-0 ms-auto me-auto login-card">
                                    <div className="card-body rounded-0 text-left">
                                        <h2 className=" display1-size display2-md-size mb-3 loginHeading">Login Into your Account</h2>
                                        <form>
                                            
                                            <div className="form-group icon-input mb-3 input_set">
                                                <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                                <input type="text" className="style2-input ps-5 form-control  font-xsss fw-600 " onChange={this.state.handelChange} name="email" value={this.state.mail} placeholder="Your Email Address" />                        
                                            </div>
                                            <div className="form-group icon-input mb-1">
                                                <input type="Password" className="style2-input ps-5 form-control" placeholder="Password" />
                                                <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                            </div>
                                            <div className="form-check text-left mb-3">
                                                <input type="checkbox" className="form-check-input mt-2" id="exampleCheck5" />
                                                <label className="form-check-label font-xsss text-grey-500 ">Remember me</label>
                                                <a href="/forgot" className="fw-600 font-xsss text-grey-700 mt-1 float-right remember">Forgot Password?</a>
                                            </div>
                                        </form>
                                        
                                        <div className="col-sm-12 p-0 text-left">
                                            
                                            <div className="form-group mb-1" type="submit" value="Register"><Link to="/login" className="form-control text-center style2-input  fw-600  border-0 p-0 loginBtn">Login</Link></div>
                                            <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Dont have account <Link to="/register" className="fw-700 ms-1 logreg">Register</Link></h6>
                                        </div>
                                        <div className="col-sm-12 p-0 text-center mt-2">
                                            
                                            <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">Or, Sign in with your social account </h6>
                                            <div className="form-group mb-1"><Link to="/register" className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2 loginBtn"><i className="font-lg ti-email text-white-500 pe-0 google"></i><span className="logintxt">Sign in with Google</span></Link></div>
                                            <div className="form-group mb-1"><Link to="/register" className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 loginBtn "><i className="font-lg ti-apple text-white-500 pe-0 google"></i><span className="logintxt">Sign in with Apple</span></Link></div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        
                    </div>

                    </form>
                    {/*  */}
                </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;