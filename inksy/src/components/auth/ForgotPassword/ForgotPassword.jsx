import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';


const ForgotPassword = () => {

    const [data, setData] = useState({
        otp: "",
        email: '',
        password: '',
    })

    const [currentStep, setCurrentStep] = useState(0);

    const makeRequest=(newData)=>{
        console.log("Form submitted",newData);
    }

    const handleNextStep = (newData, final = false) =>{
        setData(prev=>({...prev, ...newData}))
        setCurrentStep(prev=> prev + 1)      
        if(final){
            makeRequest(newData);
            return
        }
    }

    const steps = [    
        <StepOne data={data} next={handleNextStep} />,
        <StepTwo data={data} next={handleNextStep} />,
        <StepThree data={data} next={handleNextStep} />,
    ]

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
                        
                            {steps[currentStep]}
                        
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

export default ForgotPassword;