import React,{Component} from 'react';

const contactList = [
    {
        imageUrl: 'ajay.jpg',
        name: 'Ajay',
       
    },
    {
        imageUrl: 'golu.jpg',
        name: 'Golu',
      
    },
    {
        imageUrl: 'ajayy.jpg',
        name: 'Dhirendra',
       
    },
]

class Contacts extends Component {
    render() {
        return (
            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div className="card-body d-flex align-items-center p-4">
                    <h4 className="fw-700 mb-0 font-xssss text-grey-900">Online Friend</h4>
                    <a href="/defaultmember" className="fw-600 ms-auto font-xssss text-primary">See all</a>
                </div>
                {contactList.map((value , index) => (

                <div key={index} className="card-body bg-transparent-card d-flex p-3 bg-greylight ms-3 me-3 rounded-3 ">
                    <figure className="avatar me-2 mb-0"><img src={`assets/images/${value.imageUrl}`} alt="avater" className="shadow-sm rounded-circle w45" /></figure>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-2">{value.name} <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">{value.friend}</span></h4>
                    <a href="/defaultmember" className="btn-round-sm bg-white ms-auto mt-2"><span className="feather-chevron-right font-xss text-grey-900"></span></a>
                </div>

                ))}

                
            </div>
        );
    }
}

export default Contacts;