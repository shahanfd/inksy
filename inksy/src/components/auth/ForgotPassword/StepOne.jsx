import {Formik , Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';

const stepOneValidationSchema = Yup.object({
    email: Yup.string().required().email().label('Email')
})


const StepOne = (props) => {

    const handleSubmit=(values)=>{
        props.next(values);
    }

    return(
        <Formik validationSchema={stepOneValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
            {(formikProps)=>(                                
                <Form>
                    <div className="l-side pb-5">
                        <h2 className="login-heading">
                        Lets get you back <br/>with inksy
                        </h2>
                        <h4 className="login-sub-heading">
                        By Continuing you may receive an email for verification.
                        </h4>
                        <div className="login-phone-number-wrapper">
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <Field type="text" name="email" className="form-control" /> 
                                <span className="link-danger">{formikProps.errors.email}</span>                               
                            </div>
                            <button type="submit" className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default StepOne;