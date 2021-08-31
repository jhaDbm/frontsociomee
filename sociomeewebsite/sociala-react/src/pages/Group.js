import React, { Component , Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Pagetitle from '../components/Pagetitle';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import Load from '../components/Load';
import { Link , NavLink } from 'react-router-dom';
import "./group.css"

const groupList = [
    {
        imageUrl: 'Group11.jpg',
        name: 'Ajay Kumar jha',
        email: 'support@gmail.com',
        bgImage: 'Group1.jpg',
    },
    {
        imageUrl: 'Group22.jpg',
        name: 'Dhirendra Kumar jha',
        email: 'support@gmail.com',
        bgImage: 'Group2.jpg',
    },
    {
        imageUrl: 'Group33.jpg',
        name: 'Stephen Grider',
        email: 'support@gmail.com',
        bgImage: 'Group3.jpg',
    },
    {
        imageUrl: 'Group44.jpg',
        name: 'Mohannad',
        email: 'support@gmail.com',
        bgImage: 'Group4.jpg',
    },
    {
        imageUrl: 'Group5.jpg',
        name: 'GomtiNagar',
        email: 'support@gmail.com',
        bgImage: 'Group5.jpg',
    },
    {
        imageUrl: 'Group6.jpg',
        name: 'Lucknow',
        email: 'support@gmail.com',
        bgImage: 'Group6.jpg',
    },   
    {
        imageUrl: 'Group7.jpg',
        name: 'Surfiya Zakir',
        email: 'support@gmail.com',
        bgImage: 'Group7.jpg',
    }, 
    {
        imageUrl: 'Group8.jpg',
        name: 'Prince',
        email: 'support@gmail.com',
        bgImage: 'Group8.jpg',
    }, 
    {
        imageUrl: 'Group9.jpg',
        name: 'Priyanshu',
        email: 'support@gmail.com',
        bgImage: 'Group9.jpg',
    }, 
    {
        imageUrl: 'Group10.jpg',
        name: 'Ajay ',
        email: 'Ajay@gmail.com',
        bgImage: 'Group10.jpg',
    },  
    {
        imageUrl: 'Group2.jpg',
        name: 'Sachin',
        email: 'Sachin@gmail.com',
        bgImage: 'Group2.jpg',
    }, 
    {
        imageUrl: 'Group4.jpg',
        name: 'Rohit',
        email: 'Rohit@gmail.com',
        bgImage: 'Group4.jpg',
    }, 
    {
        imageUrl: 'Group6.jpg',
        name: 'Sushil',
        email: 'Sushil@gmail.com',
        bgImage: 'Group6.jpg',
    }, 
    {
        imageUrl: 'Group8.jpg',
        name: 'Dhirendra jha',
        email: 'Dhirendra@gmail.com',
        bgImage: 'Group8.jpg',
    }, 
    
]

class Badge extends Component {
    
    render() {
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row">
                                <div className="col-xl-12">
                                    
                                    <Pagetitle title="Group"/>
                                    
                                    <div className="row ps-2 pe-1">
                                        {groupList.map((value , index) => (
                                        
                                        <div key={index} className="col-md-6 col-sm-6 pe-2 ps-2">
                                            <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-0 mt-2">
                                                <div className="card-body position-relative h100 bg-image-cover bg-image-center " style={{backgroundImage: `url("assets/images/${value.bgImage}")`}}></div>
                                                <div className="card-body d-block w-100 pl-10 pe-4 pb-4 pt-0 text-left position-relative">
                                                    <figure className="avatar position-absolute w75 z-index-1 left-15" style={{marginTop: `-40px` }}><img src={`assets/images/${value.imageUrl}`} alt="avater" className="feather-zap btn-round-md bg-mini-gradiant groupImg "  /></figure>
                                                    <div className="clearfix"></div>
                                                    <h4 className="fw-700 groupname mr-2 font-xsss mt-3 mb-2">{value.name}</h4>
                                                    <br></br>
                                                    <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3 lh-3">
                                                    <span className="position-absolute right-15 top-0 d-flex align-items-center">
                                                        {/* <a href="/defaultgroup" className="d-lg-block d-none"><i className="feather-video btn-round-md font-md videocall text-white"></i></a> */}
                                                        <Link href="/defaultgroup" className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl  following font-xsssss fw-700 ls-lg text-white">FOLLOW</Link>
                                                    </span>
                                                    </p>
                                                   
                                                </div>
                                            </div>
                                        </div>

                                        ))}

                                        <Load />
                                        

                                        
                                    </div>
                                </div>               
                            </div>
                        </div>
                        
                    </div>
                </div>

                <Popupchat />
                <Appfooter /> 
            </Fragment>
        );
    }
}

export default Badge;