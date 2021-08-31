import React, { Component , Fragment } from "react";
import Chart from "react-apexcharts";

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

class Analytics extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May' ,'Jun', 'Jul', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
            series: [{
            name: '',
            data: [35, 66, 34, 56, 18 ,35, 66, 34, 56, 18 , 56, 18]
            },{
            name: '',
            data: [12, 34, 12, 11, 7 ,12, 34, 12, 11, 7 , 11, 7]
            }],
            options: {
                chart: {
                type: 'bar',
            //   width:'100%',
                height: 250,
                stacked: true,
                toolbar: {
                show: false
                },    
            },
            responsive: [{
                breakpoint: 480,
                options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            legend: {
                show: false
            },
            fill: {
                opacity: 1
            },
            },
            
        };
    }
    render() {
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content bg-white right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left pe-0">
                            <div className="row">
            
                                  <h2 className="display1-size d-block  text-grey-600 fw-500">Reactions Received</h2>
                                <div className="col-lg-2 pe-2 ps-2">
                                    <div className="card w-100 border-0 shadow-none p-3 rounded-xxl mb-3" style={{background:`#e5f6ff`}}>
                                        <div className="card-body d-flex p-0">
                                            <i className="btn-round-lg d-inline-block me-3 bg-primary-gradiant feather-thumbs-up font-md text-white"></i>
                                            <h4 className="text-primary  fw-500">2.3M <span className="fw-500 mt-0 d-block text-grey-500 font-xssss"></span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 pe-2 ps-2">
                                    <div className="card w-100 border-0 shadow-none p-3 rounded-xxl mb-3" style={{background:`#f6f3ff`}}>
                                        <div className="card-body d-flex p-0">
                                            <i className="btn-round-lg d-inline-block me-3 bg-success feather-heart font-md text-white"></i>
                                            <h4 className="text-primary fw-500">44.6K <span className="fw-500 mt-0 d-block text-grey-500 font-xssss"></span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 pe-2 ps-2">
                                    <div className="card w-100 border-0 shadow-none p-3 rounded-xxl mb-3" style={{background:`#e2f6e9`}}>
                                        <div className="card-body d-flex p-0">
                                            <i className="btn-round-lg d-inline-block me-3 bg-success feather-share-2 font-md text-white"></i>
                                            <h4 className="text-primary  fw-500">50.5K <span className="fw-500 mt-0 d-block text-grey-500 font-xssss"></span></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 ps-2">
                                    <div className="card w-100 border-0 shadow-none p-3 rounded-xxl mb-3" style={{background:`#fff0e9`}}>
                                        <div className="card-body d-flex p-0">
                                            <i className="btn-round-lg d-inline-block me-3 bg-success feather-message-circle font-md text-white"></i>
                                            <h4 className="text-primary fw-500">3M <span className="fw-500 mt-0 d-block text-grey-500 font-xssss"></span></h4>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-lg-12 mb-3">
                                <div className="card w-100 p-3 border-0 mb-3 rounded-xxl bg-lightblue2 shadow-none overflow-hidden">
                                    <Chart
                                    options={this.state.options}
                                    series={this.state.series}
                                    type="bar"
                                    width="100%"
                                    />
                                </div>
                                </div> */}
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

export default Analytics;