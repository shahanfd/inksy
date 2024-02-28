import journalDetails from '../data/data';
import '../JournalDetail/JournalDetail.scss';

function JournalDetail(props) {    
    console.log('props:',props)
  return (
    <>              
        <div className="journal-detail">
            <img 
                src={journalDetails[0].banner} 
                alt="" 
                className="journal-banner"
            />
            <div className="meta-details mb-4">
                <div className="text-container">
                    <h2 className="heading">{journalDetails[0].title}</h2>
                    <h4 className="cat-heading">{journalDetails[0].category}</h4>
                </div>
                <div className="avatar-container">
                    <img src={journalDetails[0].userImg} alt="avatar" />
                    <h6>{journalDetails[0].username}</h6>
                </div>
            </div>
            <div className="desc-container mb-4">
                <p>
                    {journalDetails[0].description} 
                </p>
            </div>
            <div className="actions-container">
                <div className="interact-btns-container d-flex align-items-center">
                    <button href="#" className="active">
                        <span className="icon icon-heart"></span>
                        {journalDetails[0].likes}
                    </button>
                    <button href="#" className="">
                        <span className="icon icon-comment"></span>
                    </button>
                    <button href="#" className="">
                        <span className="icon icon-pin"></span>
                    </button>
                    <button href="#" className="">
                        <span className="icon icon-share"></span>
                    </button>
                </div>
                <div className="move-forward-btns-container">
                    <button type="button" className="btn btn-primary">Next Page</button>
                </div>
            </div>
        </div>                
    </>
  );
}

export default JournalDetail;