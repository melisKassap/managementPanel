import React from 'react';
import Modal from 'react-bootstrap/Modal';
import InfoForm from '../forms/info';
function InfoPopUpModal(props) {
   
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Info Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <InfoForm id={props.id}/>
      </Modal.Body>
     
    </Modal>
  );
}
export default InfoPopUpModal;