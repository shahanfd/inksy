import Header from '../../Header/Header';
import logo from '../../../logo.svg';


const Login = () => {

    return(
        <div className="container">
            <img className="elipse top" src="assets/images/Ellipse-top.svg" alt="" />
            <img className="elipse bottom" src="assets/images/Ellipse-bottom.svg" alt="" />
            <div className='forms-wrapper d-flex flex-column align-items-center justify-content-center'>
                <div className="row justify-content-start w-100">
                    <img className="logo-img" src="assets/images/insky-logo.svg" alt="inksy" /> 
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="l-side pb-5">
                            <h2 className="login-heading">
                            Lets get started <br/>with inksy
                            </h2>
                            <h4 className="login-sub-heading">
                            By Continuing you may receive an SMS for verification.
                            </h4>
                            <div className="login-phone-number-wrapper">
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="r-side">
                            <div className='headings-container'>
                                <h2 className="app-heading">Download Our App</h2>
                                <p className="app-sub-heading">Don’t have an account? Sign Up</p>
                            </div>
                            <a href='#' className='app-button'><img src="assets/images/btn-android.svg" alt="" /></a>
                            <a href='#' className='app-button'><img src="assets/images/btn-ios.svg" alt="" /></a>
                            <a href='#' className='app-button'><img src="assets/images/btn-web.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Login;