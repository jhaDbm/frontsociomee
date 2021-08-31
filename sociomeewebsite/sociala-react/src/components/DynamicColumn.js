import React from "react";
import Gallery from "react-photo-gallery";
import Measure from "react-measure";
import Lightbox from "react-images";
import ShowComments from "../components/ShowComments"



const photos = [
  {
    src: "https://media1.giphy.com/media/Rz5wxqZVhRxoA/200w.webp",
    width: 3,
    height: 2
  },
  {
    src: "https://media1.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif",
    width: 1,
    height: 1
  },

  {
    src: "https://media2.giphy.com/media/vB7WSUfplJahO/200.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://media2.giphy.com/media/4xr0eyD4NBjeE/giphy.webp",
    width: 1,
    height: 1
  },
  {
    src:
      "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    width: 4,
    height: 3
  },

 

];

// to best see the results, click the popout button in the preview browser
// and resize your browser

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
            <div ref={measureRef} style={{ height: 500, padding:20, overflow: "scroll" }}>
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
              <ShowComments />
                <div class="input-group viewinput"><input type="text" class="form-control enable viewinput" placeholder="Comments Here.." /><div class="input-group-prepend"><div class="input-group-text btnsend">Send</div></div></div>
                <div class="card-body d-flex p-0 mt-3 mb-5"><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a><a href="" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i class="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i><span class="d-none-xs">Share</span></a></div>
                            
            </div>
          
          );
        }}
      </Measure>
    );
  }
}
export default DynamicGallery;
