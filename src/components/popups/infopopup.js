import {useState, useEffect} from 'react';
import { Modal } from 'bootstrap';


    const InfoPopup = (props) => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        return (
            <>
                <Modal show={props.show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close 
                     </Modal.Body>
                </Modal>
            </>
        );
    
    };
    export default InfoPopup
    


