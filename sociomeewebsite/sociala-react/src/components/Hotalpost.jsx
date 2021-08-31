import React,{Component} from 'react';

class Pagetitle extends Component {
    render() {
        const {title} = this.props;
        return (
            <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900 d-flex align-items-center">{title}
                <form action="#" className="pt-0 pb-0 ms-auto">
                    <div className="ms-2">
                        <i className="ti-search font-xss"></i>
                        <a href="/" className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i className="feather-upload font-xss text-grey-500"></i></a>
                        
                    </div>
                </form>
                <a href="/" className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i className="feather-video font-xss text-grey-500"></i></a>
                <a href="/" className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i className="feather-camera font-xss text-grey-500"></i></a>
                <a href="/" className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i className="feather-cast font-xss text-grey-500"></i></a>
                <a href="/" className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i className="feather-filter font-xss text-grey-500"></i></a>
                <a href="/" className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i className="feather-filter font-xss text-grey-500"></i></a>
                <a href="/" className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i className="feather-filter font-xss text-grey-500"></i></a>
                </h2>
            </div>            
        );
    }
}

export default Pagetitle;


