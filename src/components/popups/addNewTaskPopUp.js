import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {useState, useEffect} from 'react';
import AddNewTaskForm from '../forms/addTask';
function AddNewTaskPopUp(props) {
   
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <AddNewTaskForm/>
      </Modal.Body>
     
    </Modal>
  );
}
export default AddNewTaskPopUp;