import {Formik , Form, Field} from 'formik'
import * as Yup from 'yup';
import {Link} from 'react-router-dom'

const stepThreeValidationSchema = Yup.object({
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
                        Password
                        </h2>
                        <h4 className="login-sub-heading">
                        Enter new password to login to your account.
                        </h4>
                        <div className="login-phone-number-wrapper">
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <Field type="password" name="password" className="form-control" />
                                <span className="link-danger">{formikProps.errors.password}</span>  
                            </div>
                            <button type="submit" className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default StepThree;