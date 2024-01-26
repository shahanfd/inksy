import {Formik , Form, Field} from 'formik'
import * as Yup from 'yup';
import {Link} from 'react-router-dom'

const stepThreeValidationSchema = Yup.object({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().label('Password'),
})

const StepThree = (props) => {

    const handleSubmit=(values)=>{
        props.next(values, true);
    }

    return(
        <Formik validationSchema={stepThreeValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
            {(formikProps)=>(                
                <Form>
                    <div className="l-side pb-5">
                        <h2 className="login-heading">
                        Login to your account
                        </h2>
                        <h4 className="login-sub-heading">
                        Enter Credentials to login to your account
                        </h4>
                        <div className="login-phone-number-wrapper">
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <Field type="text" name="email" className="form-control" />
                                <span className="link-danger">{formikProps.errors.email}</span>  
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <Field type="password" name="password" className="form-control" />
                                <span className="link-danger">{formikProps.errors.password}</span>  
                            </div>
                            <Link to="/forgot-password">Forget Password?</Link>
                            <button type="submit" className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default StepThree;