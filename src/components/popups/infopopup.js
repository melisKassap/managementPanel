import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState, useEffect} from 'react';
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
        
        <p>
         Info task
        </p>
      </Modal.Body>
     
    </Modal>
  );
}
export default InfoPopUpModal;