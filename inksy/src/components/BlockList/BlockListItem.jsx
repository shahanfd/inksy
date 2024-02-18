
const BlockListItem=(props)=>{
        return(
            <div>
                <h2 className="mb-3">Block list</h2>
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
                                <div className="col-md-11">
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <h5 className="card-title">{el.title}</h5>
                                    <button type="button" className="btn-primary btn-md">Unblock</button>                            
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

export default BlockListItem;