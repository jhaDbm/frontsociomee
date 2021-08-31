import React,{Component} from 'react';
import Slider from "react-slick";
import "./storyslider.css"

const storyList = [
    {   
        bgUrl: "img5.jpg",
        imageUrl: 'img5.jpg',
        name: 'Ajay jha ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: 'ajayjha.jpg',
        imageUrl: 'ajayjha.jpg',
        name: 'Dhirendra kumar jha ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: 'golu.jpg',
        imageUrl: 'golu.jpg',
        name: 'Golu',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: 'saket12.jpg',
        imageUrl: 'saket12.jpg',
        name: 'Saket ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: "prveen.jpg",
        imageUrl: 'prveen.jpg',
        name: 'Parveen sir ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: 'img42.jpg',
        imageUrl: 'img42.jpg',
        name: 'Kumar',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: "priyanshu1.jpg",
        imageUrl: 'priyanshu1.jpg',
        name: 'Priyanshu',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: "prince.jpg",
        imageUrl: 'prince.jpg',
        name: 'Prince ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: "bhai.jpg",
        imageUrl: 'bhai.jpg',
        name: 'Dharmendra ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: "gmama.jpg",
        imageUrl: 'gmama.jpg',
        name: 'G.K Jha',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: "cmmmm.jpg",
        imageUrl: 'cmmmm.jpg',
        name: 'R.K.Jha',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: "img3.jpg",
        imageUrl: 'img3.jpg',
        name: 'Rohit',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: "img6.jpg",
        imageUrl: 'img6.jpg',
        name: 'Rishab',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: "img3.jpg",
        imageUrl: 'img3.jpg',
        name: 'Sury ',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: "img6.jpg",
        imageUrl: 'img6.jpg',
        name: 'Hardik',
        email: 'support@gmail.com',
    },
    {   
        bgUrl: "img3.jpg",
        imageUrl: 'img3.jpg',
        name: 'Kartik',
        email: 'support@gmail.com',
    },
]

class Storyslider extends Component {
    render() {
        const storysettings = {
            arrows: false,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true
        };
        return (
            <Slider {...storysettings}>
                <div data-bs-toggle="modal" data-bs-target="#Modalstory" className="card w150 h200 d-block border-0 shadow-none rounded-xxxl object-fit bg-dark overflow-hidden mb-3 ml-1 mt-0 me-3 storysetting">
                    <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center">
                        <span className="btn-round-lg bg-white"><i className="feather-plus font-lg"></i></span>
                        <div className="clearfix mt-1"></div>
                        <h4 className="fw-700 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">Add Story </h4>                    
                    </div>
                </div>
                {storyList.map((value , index) => (
                <div key={index}>
                    <div className="card w125 h200 d-block border-0  crounded mx-auto d-block shadow-xss rounded-xxxl bg-gradiant-bottom overflow-hidden cursor-pointer mb-3 mt-0 me-3 fit-image" style={{backgroundImage: `url("assets/images/${value.bgUrl}")`}}>
                        <div className="card-body d-block p-3 w-100 position-absolute bottom-0 text-center" >
                            <figure className="overflow-hidden avatar ms-auto me-auto mb-0 position-relative w50 z-index-1 "><img src={`assets/images/${value.imageUrl}`} alt="avater" className="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                            <div className="clearfix mt-1"></div>
                            <h4 className="fw-600 position-relative z-index-1 ls-1 font-xssss text-white mt-2 mb-1">{value.name} </h4>
                        </div>
                    </div>
                </div>
                ))}
            </Slider>
        );
    }
}

export default Storyslider;