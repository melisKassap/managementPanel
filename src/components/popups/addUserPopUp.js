import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {useState, useEffect} from 'react';
import AddUserForm from '../forms/addUser';
function AddUserPopUpModal(props) {
   
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <AddUserForm/>
      </Modal.Body>
     
    </Modal>
  );
}
export default AddUserPopUpModal;