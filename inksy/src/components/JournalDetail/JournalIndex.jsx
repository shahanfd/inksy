import { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom'
import { GoBackButton } from '../GoBackButton/GoBackButton';



function JournalIndex(props) {    
    console.log('props:',props)
    let { id } = useParams();
    let location = useLocation(); 

    useEffect(() => {
        console.log(`/something/${id}`, 'location:', location, 'params:');
    },[]);
        

  return (
    <>          
    
        <div className="journal-detail">
            <div className="meta-details mb-4">
                <div className="text-container">
                    <h2 className="heading">Index</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="">
                    <Link className='btn btn-primary'>Edit</Link>
                </div>
            </div>
            <div className='index-container mb-4'>
                <img src="https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg" alt="" />
            </div>
            <div className="buttons-container d-flex align-items-center justify-content-between">
                {/* <Link to="" className='btn btn-primary'>Back</Link> */}
                <GoBackButton/>
                <h4 className='index-name'>Index</h4>
                <Link to="" className='btn btn-primary'>Next</Link>
            </div>
        </div>                
    </>
  );
}

export default JournalIndex;