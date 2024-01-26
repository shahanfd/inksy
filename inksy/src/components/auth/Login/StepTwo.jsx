import {Formik , Form, Field} from 'formik'
import * as Yup from 'yup';

const stepTwoValidationSchema = Yup.object({
    otp: Yup.number().required().label('OTP')
})

const StepTwo = (props) => {

    const handleSubmit=(values)=>{
        props.next(values);
    }

    return(
        <Formik validationSchema={stepTwoValidationSchema} initialValues={props.data} onSubmit={handleSubmit}>
            {(formikProps)=>(                
                <Form>
                    <div className="l-side pb-5">
                        <h2 className="login-heading">
                        Enter the OTP Code
                        </h2>
                        <h4 className="login-sub-heading">
                        Enter the 6 Digit Code send on +1 828 513 5050
                        </h4>
                        <div className="login-phone-number-wrapper">
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <Field type="text" name="otp" className="form-control" />
                                <span className="link-danger">{formikProps.errors.otp}</span>   
                            </div>
                            <button type="submit" className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default StepTwo;