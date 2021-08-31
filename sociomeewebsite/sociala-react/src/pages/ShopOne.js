import React, { Component , Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import "./shopone.css"

const productList = [
    {
        imageUrl: 'f1.jpg',
        name: 'Textured Sleeveless Camisole',
        price:'449'
    },
    {
        imageUrl: 'fassion.4.jpg',
        name: 'Adjustable Shoulder Straps',
        price:'449'
    },
    {
        imageUrl: 'fassion.5.jpg',
        name: 'Neck Strappy Camisole',
        price:'449'
    },
    {
        imageUrl: 'mob1.jpg',
        name: 'Scoop-Neck Strappy',
        price:'449'
    },
    {
        imageUrl: 'mob1.jpg',
        name: 'Butler Stool Ladder',
        price:'449'
    },
    {
        imageUrl: 'mob1.jpg',
        name: 'Butler Stool Ladder',
        price:'449'
    },
    {
        imageUrl: '005.png',
        name: 'Butler Stool Ladder',
        price:'449'
    },
    {
        imageUrl: '005.png',
        name: 'Butler Stool Ladder',
        price:'449'
    },
    {
        imageUrl: '005.png',
        name: 'Textured Sleeveless Camisole',
        price:'449'
    },
    {
        imageUrl: 'watch.jpg',
        name: 'Adjustable Shoulder Straps',
        price:'449'
    },
    {
        imageUrl: 'watch.jpg',
        name: 'Neck Strappy Camisole',
        price:'449'
    },
    {
        imageUrl: 'watch.jpg',
        name: 'Scoop-Neck Strappy',
        price:'449'
    },
    {
        imageUrl: 'shoes.jpg',
        name: 'Adjustable Shoulder Straps',
        price:'449'
    },
    {
        imageUrl: 'shoes.jpg',
        name: 'Neck Strappy Camisole',
        price:'449'
    },
    {
        imageUrl: 'shoes.jpg',
        name: 'Scoop-Neck Strappy',
        price:'449'
    },
]


class ShopOne extends Component {
    render() {
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content bg-white right-chat-active">

                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="row">
                                <div className="col-xl-12 col-xxl-12 col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card p-md-5 p-4 bg-primary-gradiant rounded-3 shadow-xss bg-pattern hedding border-0 overflow-hidden">
                                                <div className="bg-pattern-div"></div>
                                                
                                                <span className="display2-size display2-md-size fw-700 text-white mb-0 mt-0">Market Product Place </span>
                                                 <input type="search" id="form1" class="form-control serchbar " />
                                            <button type="button" class="shopsearch">
                                            See All
                                        </button>
                                           
                                            </div>
                                    
                                        </div>
                                        
                                        <div className="col-lg-12 mt-3 float-left font-xssss fw-700 text-grey-500 texts-uppercase ls-2 mt-2 pt-1">
                                        
                                            <div className="row">
                                            <div className="col-md-2 ">
                                            <select class="form-select select-input-set" aria-label="Default select example">
                                            <option selected>All Product</option>
                                            <option value="1">Real State</option>
                                            <option value="2">Vehicals</option>
                                            <option value="3">fassion</option>
                                            </select>
                                            </div>
                                            <div className="col-md-2">
                                            <select class="form-select select-input-set" aria-label="Default select example">
                                            <option selected>Sub Category</option>
                                            <option value="1">Category-1</option>
                                            <option value="2">Category-2</option>
                                            <option value="3">Category-3</option>
                                            </select>
                                            </div>
                                            <div className="col-md-2">
                                            <input type="email" class="form-control prices-set" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Min Price" />
                                            </div>
                                            <div className="col-md-2">
                                            <input type="email" class="form-control prices-set" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Max Price" />
                                            </div>
                                            <div className="col-md-2">
                                            <select class="form-select select-input-set" aria-label="Default select example">
                                            <option selected>Location</option>
                                            <option value="1">Lucknow</option>
                                            <option value="2">Delhi</option>
                                            <option value="3">Mumbai</option>
                                            <option value="4">Punjab</option>
                                            </select>
                                            </div>
                                            <div className="col-md-2">
                                            <select class="form-select select-input-set" aria-label="Default select example">
                                            <option selected>Within(km)</option>
                                            <option value="1">1-50Km</option>
                                            <option value="2">5-100</option>
                                            <option value="3">100-150</option>
                                            </select>
                                            </div>
                                            
                                            </div>
                                        </div>
                                        <button type="button" class="shopsearch1">Apply</button>
                                        

                                        {productList.map((value , index) => (

                                        <div key={index} className="col-lg-4 col-md-6" >
                                            <div className="card w-100 border-0 mt-4">
                                                <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                                                    <a href="/singleproduct"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 mt-0 mb-0 p-2" /></a>
                                                </div>
                                                <div className="card-body w-100 p-0 text-center">
                                                    <h2 className="mt-2 mb-1"><a href="/singleproduct" className="text-black fw-700 font-xsss lh-26">{value.name}</a></h2>
                                                    <h6 className="font-xsss fw-600 text-grey-500 ls-2">${value.price}</h6>
                                                </div>                                
                                            </div>
                                        </div>

                                        ))}

                                        
                                        <div className="col-lg-12 mt-3 mb-5 text-center"><a href="/shop1" className="fw-700 text-white font-xssss text-uppercase ls-3 lh-32 rounded-3 mt-3 text-center d-inline-block p-2 bg-current w150">Load More</a></div>
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

export default ShopOne;