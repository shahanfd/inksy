

const Privacy = () => {        
    return(
        <div className='d-flex justify-content-between mt-5'>   
        <div className="text-content">
            <h2 className="heading">Privacy setting</h2>        
            <p>it is controlled who will send you follow request</p>
        </div>
        <div className="form-check form-switch p-0 mt-2">
            <label className="form-check-label theme-status">On</label>
            <input className="form-check-input" type="checkbox" name="privacy-switch"/>
        </div>         
        </div>
    )
}

export default Privacy;