
const detectButton=(type)=>{
    if(type && type == 'followReq'){
        return(
            <button type="button" className="btn-primary btn-md">Follow Person</button>
        )
    }else{
        return false
    }
}

const NotificationItem=(props)=>{
        return(
            <div>
                {
                    props.data.map((el,i)=>{
                        return(
                            <div className="notifications-item" key={i}>
                            <div className="card notification-card mb-3">
                            <div className="row g-0">
                                <div className="col-md-1 d-flex align-items-start">
                                    <div className="img-container">
                                        <img src={el.img} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{el.title}</h5>
                                    <p className="card-text">{el.desc}</p>
                                    <p className="card-text"><small className="text-muted">{el.time}</small></p>
                                    {detectButton(el.type)}                              
                                </div>
                                </div>
                            </div>
                            </div> 
                            </div>
                        )
                    })
                }
            </div>
        )
  }

export default NotificationItem;