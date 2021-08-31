import React,{Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "./reaction.css";
import "./trandes.css";





class Trandes extends Component {

    render() {
       
        return(
            <div class="container d-flex justify-content-center  main-content-trand">
                    <div class="row">

                {/*  */}
                <div class="container ">
                   
                    <div class="row  ">
                    <h2 className="heading">Trending !</h2>
                 
                    <div class="col-sm-1">
                    <img src="assets/images/trending.png" />
                    </div>
                    <div class="col-sm-2">
                    <span className="teands">#sociomee</span> 
                    <p className="subheding">30.52 Post</p>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-1">
                        <img src="assets/images/trending.png" />
                        </div>
                        <div class="col-sm-2">
                        <span className="teands">#Linkedin</span> 
                        <p  className="subheding">30.52 Post</p>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-1">
                        <img src="assets/images/trending.png" />
                        </div>
                        <div class="col-sm-2">
                        <span className="teands">#socialmedia</span> 
                        <p  className="subheding">30.52 Post</p>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col-sm-1">
                        <img src="assets/images/trending.png" />
                        </div>
                        <div class="col-sm-2">
                        <span className="teands">#twitter</span> 
                        <p  className="subheding">30.52 Post</p>
                        </div>
                    </div>
                </div>
               
              
            </div>
        </div>
        );
    }
}

export default Trandes;