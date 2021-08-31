import React,{Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "./reaction.css"





class Profilephoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
       
        return(
            <div class="container d-flex justify-content-center padding">
              
            <div class="row">
           
                {/*  */}
                <div className="w-100 shadow-xss rounded-xxl poststatus ">
                        <div className="d-flex align-items-center">
                        <h2 className="reactionheadding">Reactions</h2>
                        </div>
                        <div className=" d-block pt-0 pb-2 ">
                            <div className=" d-flex pt-0 ps-1 pe-4 pb-3 text-center overflow-hidden">
                            <div className="ps-3 pe-3">
                            <sapn className="imogiset">👍</sapn>
                     <span className="reaction-text">12.642</span>
                     <p>LIKES</p>
                           
                            </div>
                            <div className="ps-3 pe-3">
                            <sapn className="imogiset">🥺</sapn>
                            <span className="reaction-text">8.913</span>
                            <p>OMG</p>
                            </div>
                            </div>
                            <div className="d-flex pt-0 ps-1 pe-4 pb-3 text-center overflow-hidden">
                            <div className="ps-3 pe-3">
                            <sapn className="imogiset">🥺</sapn>
                            <span className="reaction-text">12.642</span>
                            <p>EPIC</p>
                            </div>

                            <div className="ps-3 pe-3">
                            <sapn className="imogiset">😏</sapn>
                            <span className="reaction-text">8.913</span>
                            <p>LOL</p>
                            </div>
                            </div>
                            <div className="d-flex pt-0 ps-1 pe-1 pb-1 text-center overflow-hidden">
                            <div className="ps-3 pe-3">
                            <sapn className="imogiset">❤️</sapn>
                            <span className="reaction-text">12.642</span>
                            <p>EPIC</p>
                            </div>

                            <div className="ps-3 pe-3">
                            <sapn className="imogiset">😊</sapn>
                            <span className="reaction-text">8.913</span>
                            <p>LOL</p>
                            </div>
                            </div>
                            
                        </div>
                    </div>
               
              
            </div>
        </div>
        );
    }
}

export default Profilephoto;