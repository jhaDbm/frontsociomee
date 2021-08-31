import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import "./appfooter.css"

class Appfooter extends Component {
    render() {
        return (
            <div className="app-footer border-0 shadow-lg footerbg">
                <Link to="/home" className="nav-content-bttn nav-center"><i className="feather-home"></i></Link>
                <Link to="/defaultvideo" className="nav-content-bttn"><i className="feather-package"></i></Link>
                <Link to="/defaultlive" className="nav-content-bttn" data-tab="chats"><i className="feather-layout"></i></Link>           
                <Link to="/shop2" className="nav-content-bttn"><i className="feather-layers"></i></Link>
                <Link to="/defaultsettings" className="nav-content-bttn"><img src="assets/images/ajayy.jpg"  alt="user" className="feather-zap btn-round-md bg-mini-gradiant me-3" /></Link>
            </div>        
        );
    }
}

export default Appfooter;