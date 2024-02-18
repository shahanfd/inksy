
const Password = () => {    

    return(
        <div className=''>      
            <h2 className="heading">Change Password</h2>       
            <form>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Current Password"/>
                </div>
                <label className="form-label"><b>New Password</b></label>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Confirm Password"/>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
            </form>        
        </div>
    )
}

export default Password;