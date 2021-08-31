
import "./twoimage.css";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import Gallery from "react-photo-gallery";
import Measure from "react-measure";
import Lightbox from "react-images";
import ShowComments from '../components/ShowComments';

const photos = [
    {
 
        src: "https://media2.giphy.com/media/4xr0eyD4NBjeE/giphy.webp",
        width: 3,
        height: 2
    },
    {
        src: "https://media1.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif",
        width: 1,
        height: 1
    },

];


class DynamicGallery extends React.Component {
    constructor() {
        super();
        this.state = { width: -1 };
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    }
    render() {
        const width = this.state.width;
        return (

            <Measure
                bounds
                onResize={contentRect =>
                    this.setState({ width: contentRect.bounds.width })
                }
            >
                {({ measureRef }) => {
                    if (width < 1) {
                        return <div ref={measureRef} />;
                    }
                    let columns = 1;
                    if (width >= 480) {
                        columns = 2;
                    }
                    if (width >= 1024) {
                        columns = 3;
                    }
                    if (width >= 1824) {
                        columns = 4;
                    }
                    return (
                       
    
                        <div className="twoImg" ref={measureRef} style={{ height: 500}} className="twoImage">
                            <div class="card-body p-0 d-flex">
                                <figure class="avatar me-3">
                                <img src="assets/images/ajay.jpg" alt="avater" class="shadow-sm rounded-circle w45" /></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1"> Saket <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500"> 3 hour ago</span></h4><div class="ms-auto pointer"><i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></div></div>
                            <Gallery
                                photos={photos}
                                columns={columns}
                                onClick={this.openLightbox}
                            />
                            <Lightbox
                                images={photos}
                                onClose={this.closeLightbox}
                                onClickPrev={this.gotoPrevious}
                                onClickNext={this.gotoNext}
                                currentImage={this.state.currentImage}
                                isOpen={this.state.lightboxIsOpen}
                            />

                            <div class="card-body d-flex p-0 mt-3 mb-3"><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a><a href="" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i><span class="d-none-xs">Share</span></a></div>
                            <ShowComments />
                            <div class="input-group"><input type="text" class="form-control enable" placeholder="Comments here.." /><div class="input-group-prepend">
                                <div class="input-group-text btnsend">Send</div></div></div>
                        </div>
                    


                    );
                }}
            </Measure>
        );



        
    }
}
export default DynamicGallery;
