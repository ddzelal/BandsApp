import React from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

const ModalDialog = ({ currentBand ,show , handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{currentBand.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div className="row">
    {currentBand.info}
    </div>
    <div className="row">
     <img className="mainThumb" src={currentBand.thumb3} alt=""></img> 
     <img className="mainThumb" src={currentBand.thumb1} alt=""></img> 
     <img className="mainThumb" src={currentBand.thumb2} alt=""></img> 

    </div>
    </Modal.Body>
    
    <Modal.Footer>
      <Button variant="danger" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  );
};

export default ModalDialog;
