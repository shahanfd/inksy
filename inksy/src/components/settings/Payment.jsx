
const Payment = () => {    

    return(
        <div className=''>            
             <h2 className="heading mb-5">Payments Setting</h2>     
             <form>
                <label><b>Manage Email</b></label>
                <div className="mb-5 d-flex align-items-center justify-content-center">
                    <input type="email" className="form-control" placeholder="Enter Email to Continue"/>
                    <button type="submit" className="btn btn-primary mx-4">Yes I’m In</button>
                </div>
                <div className="settings-payment-mode-container d-flex align-items-center justify-content-center">
                    <button type="button">
                        <img src="assets/images/venmo.svg" alt="venmo" />
                    </button>
                    <button type="button">
                        <img src="assets/images/paypal.svg" alt="paypal" />
                    </button>
                </div>
             </form>  
        </div>
    )
}

export default Payment;