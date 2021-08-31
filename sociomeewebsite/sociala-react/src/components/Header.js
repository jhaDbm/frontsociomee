import React,{Component} from 'react';
import { Link , NavLink } from 'react-router-dom';
import EventPopUp from "../components/EventPopUp";
import "./header.css"

import Darkbutton from '../components/Darkbutton';

class Header extends Component {
    state = {
        isOpen: false,
        isActive: false,
        isNoti: false
    };

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    toggleActive = () => this.setState({ isActive: !this.state.isActive });
    toggleisNoti = () => this.setState({ isNoti: !this.state.isNoti });

    render() {
        const navClass = `${this.state.isOpen ? " nav-active" : ""}`;
        const buttonClass = `${this.state.isOpen ? " active" : ""}`;
        const searchClass = `${this.state.isActive ? " show" : ""}`;
        const notiClass = `${this.state.isNoti ? " show" : ""}`;

        return (
            <div className="nav-header bg-white shadow-xs border-0 hedding-set">
                <div className="nav-top">
                    <Link to="/"><i className=" text-success display2-size me-3 ms-0"><img src="https://ecodeacademy.com/sociomee/img/favicon.png" className="sublogo1" /></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0"><img src="https://ecodeacademy.com/sociomee/img/logo.png" className="sublogo"/></span> </Link>
                    <Link to="/defaultmessage" className="mob-menu ms-auto me-2 chat-active-btn"><i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i></Link>
                    <Link to="/defaultvideo" className="mob-menu me-2"><i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i></Link>
                    <span onClick={this.toggleActive} className="me-2 menu-search-icon mob-menu"><i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></span>
                    <button onClick={this.toggleOpen} className={`nav-menu me-0 ms-2 ${buttonClass}`}></button>
                </div>
                
                <form action="#" className="float-left header-search ms-3">
                    <div className="form-group mb-0 icon-input">
                        <i className="feather-search font-sm text-grey-400"></i>
                        <input type="text" placeholder="Start typing to search.." className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg" />
                    </div>
                </form>
            
                <NavLink activeClassName="active" to="/home" className="p-2 text-center ms-3 menu-icon center-menu-icon"><i className="feather-home font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink>
                <NavLink activeClassName="active" to="/defaultstorie" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-zap font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink>
                <NavLink activeClassName="active" to="/defaultvideo" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-video font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink>
                <NavLink activeClassName="active" to="/defaultgroup" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-user font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink>
                <NavLink activeClassName="active" to="/shop2" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-shopping-bag font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink>

                <NavLink activeClassName="active" to="/" className="p-2 text-center ms-0 menu-icon center-menu-icon totalPost"><span className="number">512 </span>Total Posts</NavLink>
                <NavLink activeClassName="active" to="/" className="p-2 text-center ms-0 menu-icon center-menu-icon totalfriends"><span className="number">250 </span>Total Friends</NavLink>
                <span className={`p-2 pointer text-center ms-auto menu-icon ${notiClass}`} id="dropdownMenu3" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.toggleisNoti}><span className="dot-count bg-warning"></span><i className="feather-bell font-xl text-current"></i></span>
                <div className={`dropdown-menu p-4 right-0 rounded-xxl border-0 shadow-lg notification ${notiClass}`} aria-labelledby="dropdownMenu3">
                    <h4 className="fw-700 font-xss mb-4">Notification</h4>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/frnd.jpg" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Friend Requests<span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 3 min</span></h5>
                       
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/birthday.jpg" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Birthday<span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 2 min</span></h5>
                       
                    </div>

                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/market.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Surfiya Zakir <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 1 min</span></h5>
                      
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5">
                        <img src="assets/images/priyanshu.jpg" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">Victor Exrixon <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 30 sec</span></h5>
                        <h6 className="text-grey-500 fw-500 font-xssss lh-4">hello.</h6>
                    </div>
                </div>
                
                <Link to="/defaultmessage" className="p-2 text-center ms-3 menu-icon chat-active-btn"><i className="feather-message-square font-xl text-current"></i></Link>
                <Darkbutton />
                <Link to="/defaultsettings" className="p-0 ms-3 menu-icon"><img src="assets/images/ajay.jpg" alt="user" className="w40 mt--1 prifileImg" /></Link>

                <nav className={`navigation scroll-bar ${navClass}`}>
                    <div className="container ps-0 pe-0">
                        <div className="nav-content">
                            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                                <div className="nav-caption fw-600 font-xssss text-grey-500"><span>New </span>Feeds</div>
                                <ul className="mb-1 top-content">
                                    <li className="logo d-none d-xl-block d-lg-block"></li>
                                    <li><Link to="/home" className="nav-content-bttn open-font"><i className="feather-tv btn-round-md bg-blue-gradiant navbarcol me-3"></i><span>Social Feed</span></Link></li>
                                    <li><Link to="/defaultbadge" className="nav-content-bttn open-font"><i className="feather-award btn-round-md bg-red-gradiant navbarcol me-3"></i><span>Busniness Pages</span></Link></li>
                                    <li><Link to="/defaultstorie" className="nav-content-bttn open-font"><i className="feather-globe btn-round-md bg-gold-gradiant navbarcol me-3"></i><span>Stories</span></Link></li>
                                    <li><Link to="/shop1" className="nav-content-bttn open-font"><i className="feather-shopping-cart btn-round-md bg-mini-gradiant navbarcol me-3"></i><span>Market Place</span></Link></li>
                                    <li><Link to="/defaultgroup" className="nav-content-bttn open-font"><i className="feather-users btn-round-md bg-mini-gradiant navbarcol me-3"></i><span>Groups</span></Link></li>
                                    <li><Link to="/payment" className="nav-content-bttn open-font"><i className="feather-credit-card btn-round-md bg-primary-gradiant navbarcol me-3"></i><span>Add Manager</span></Link></li>  
                                    <li><Link to="/userpage" className="nav-content-bttn open-font"><i className="feather-user btn-round-md bg-primary-gradiant navbarcol me-3"></i><span>My Profile </span></Link></li>     
                                   
                                </ul>
                            </div>

                            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
                                <div className="nav-caption fw-600 font-xssss text-grey-500"><span>More </span>Pages</div>
                                <ul className="mb-3">
                                  
                                    <li><Link to="/defaultevent" className="nav-content-bttn open-font"><i className="font-xl text-current feather-map-pin navbarcolitens me-3 "></i><span>Latest Event</span></Link></li>
                                    <li><Link to="/defaultlive" className="nav-content-bttn open-font"><i className="font-xl text-current feather-youtube navbarcolitens me-3"></i><span>Live Stream</span></Link></li>
                                    <li><Link to="/defaulthotel" className="nav-content-bttn open-font"><i className="font-xl text-current feather-arrow-up-circle navbarcolitens me-3"></i><span>Top Posts</span></Link></li> 
                                    <li><Link to="/defaultemailbox" className="nav-content-bttn open-font"><i className="font-xl text-current feather-inbox me-3"></i><span>ChatBox</span><span className="circle-count bg-warning mt-1">584</span></Link></li>
                                       
                                </ul>
                            </div>
                            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                                <div className="nav-caption fw-600 font-xssss text-grey-500"><span></span> Account</div>
                                <ul className="mb-1">
                                    <li className="logo d-none d-xl-block d-lg-block"></li>
                                
                                    <li><Link to="/defaultsettings" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-settings  me-3  account"></i><span>Settings</span></Link></li>
 
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <div className={`app-header-search ${searchClass}`}>
                    <form className="search-form">
                        <div className="form-group searchbox mb-0 border-0 p-1">
                            <input type="text" className="form-control border-0" placeholder="Search..." />
                            <i className="input-icon">
                                <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline"></ion-icon>
                            </i>
                            <span className="ms-1 mt-1 d-inline-block close searchbox-close">
                                <i className="ti-close font-xs" onClick={this.toggleActive}></i>
                            </span>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Header;