import React, { Component , Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Pagetitle from '../components/Pagetitle';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

const memberList = [
    {
        imageUrl: 'ajayy.jpg',
        name: 'Ajay jha',
        user: '@ajay343',
    },
    {
        imageUrl: 'golu.jpg',
        name: 'Golu ',
        user: 'Golu@macale343',
    },
    {
        imageUrl: 'prince.jpg',
        name: 'Prince ',
        user: 'Prince@macale343',
    },
    {
        imageUrl: 'bhai.jpg',
        name: 'Arvind',
        user: 'Arvind@macale343',
    },
    {
        imageUrl: 'ajay.jpg',
        name: 'Dhirendra ',
        user: 'Dhirendra@macale343',
    },
    {
        imageUrl: 'anmol.jpg',
        name: 'Anmol',
        user: 'Anmol@macale343',
    },
    {
        imageUrl: 'abhi.jpg',
        name: 'Abhi',
        user: 'abhi@macale343',
    },
    {
        imageUrl: 'anuj.jpg',
        name: 'Anuj',
        user: 'Anuj@macale343',
    },
    {
        imageUrl: 'saddy.jpg',
        name: 'Saddy',
        user: 'saddy@macale343',
    },
    {
        imageUrl: 'mishra.jpg',
        name: 'Vivek',
        user: 'Vivek@macale343',
    },
    {
        imageUrl: 'one.jpg',
        name: 'Marry ',
        user: 'Marry@macale343',
    },
    {
        imageUrl: 'mandir.jpg',
        name: 'Talpurwa ',
        user: 'Talpurwa@macale343',
    },
]

class Member extends Component {
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
                                    <Pagetitle title="Member"/>

                                    <div className="row ps-2 pe-2">

                                        {memberList.map((value , index) => (
                                        <div key={index} className="col-md-3 col-sm-4 pe-2 ps-2">
                                            <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                                                <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                                                    <figure className="overflow-hidden avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={`assets/images/${value.imageUrl}`} alt="avater" className="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                                                    <div className="clearfix w-100"></div>
                                                    <h4 className="fw-700 font-xsss mt-3 mb-0">{value.name} </h4>
                                                    <p className="fw-500 font-xssss text-grey-500 mt-0 mb-3">{value.user}</p>
                                                    <a href="/defaultmember" className="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-24 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">ADD FRIEND</a>
                                                </div>
                                            </div>
                                        </div> 
                                        ))}

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

export default Member;