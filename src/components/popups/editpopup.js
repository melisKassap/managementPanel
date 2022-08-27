import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState, useEffect} from 'react';
import EditForm from '../forms/editforms';
function EditPopUpModal(props) {
   
    const [count, setCount] = useState(0);
   console.log(props)
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <EditForm id={props.id}/>
      </Modal.Body>
     
    </Modal>
  );
}
export default EditPopUpModal;