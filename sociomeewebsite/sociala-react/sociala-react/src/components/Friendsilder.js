import React,{Component} from 'react';
import Slider from "react-slick";
import "./friedslider.css"

const memberList = [
    {   
        bgUrl: 'img3.jpg',
        imageUrl: 'img3.jpg',
        name: 'Ajay ',
        email: 'ajay@gmail.com',
    },
    {   
        bgUrl: 'ajay.jpg',
        imageUrl: 'ajay.jpg',
        name: 'Dhirendra',
        email: 'Dhirendra@gmail.com',
    },
    {   
        bgUrl: 'mishra.jpg',
        imageUrl: 'mishra.jpg',
        name: 'Achyuta',
        email: 'Achyuta@gmail.com',
    },
    {   
        bgUrl: 'arvind.jpg',
        imageUrl: 'arvind.jpg',
        name: 'Arvind Tiwari ',
        email: 'Arvind@gmail.com',
    },
    {   
        bgUrl: 'saket.jpg',
        imageUrl: 'saket.jpg',
        name: 'Studio Express ',
        email: '@StudioExpress',
    },
    {   
        bgUrl: 'priyanshu.jpg',
        imageUrl: 'priyanshu.jpg',
        name: 'priyanshu ',
        email: 'priyanshu@gmail.com',
    },
    {   
        bgUrl: 'prveen.jpg',
        imageUrl: 'prveen.jpg',
        name: 'parveen sir ',
        email: 'parveen@gmail.com',
    },
]

class Friendsilder extends Component {
    render() {
        const friendsettings = {
            arrows: false,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
        };
        return (
            <Slider {...friendsettings}>
                {memberList.map((value , index) => (
                <div key={index} className="card w150 d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 me-3 ">
                    <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                        <figure className="overflow-hidden avatar ms-auto me-auto mb-0 position-relative w65 z-index-1"><img src={`assets/images/${value.imageUrl}`} alt="avater" className="float-right p-0 bg-white rounded-circle w-100 shadow-xss" /></figure>
                        <div className="clearfix"></div>
                        <h4 className="fw-700 font-xssss mt-3 mb-1 d-block w-100"> {value.name} </h4>
                        <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3 lh-2">{value.email}</p>
                        <a href="/" className="text-center p-2 lh-20 w100 ms-1 ls-3 d-inline-block rounded-xl bg-success font-xsssss fw-700 ls-lg text-white">FOLLOW</a>
                    </div>
                </div>
                ))}
            </Slider>
        );
    }
}

export default Friendsilder;