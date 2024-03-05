import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Navigate} from 'react-router-dom'

function Popup(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {    
    setShow(false);
    // props.onHide(true);
    <Navigate to="/categories" />
  }
  const handleShow = () => {setShow(true)};

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <div className="heading-container mb-3">
                <h3 className="heading">Select Categories</h3>
        </div>
        <div className='d-flex flex-column cat-select-button'>
          <div className=''>
            <button type="button" onClick={handleClose}><span className='icon-music'></span>Music</button>
          </div>
          <div className=''>
            <button type="button" onClick={handleClose}><span className='icon-cat-flower'></span>Gardening</button>
          </div>
          <div className=''>
            <button type="button" onClick={handleClose}><span className='icon-paint'></span>Paint</button>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;