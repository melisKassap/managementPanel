import React, { useRef } from 'react';

import { firestore } from '../../services/firebase';

import { addDoc, collection } from "@firebase/firestore";
function AddUser() {

    const ref = collection(firestore, "users");
    const registrationNameRef = useRef();
    const nameRef = useRef();
    const surNameRef = useRef();


    const handleSave = async (e) => {
        e.preventDefault();
        let data = {
            registrationName : registrationNameRef.current.value,
            name : nameRef.current.value,
            surName :surNameRef.current.value
        }
        try{
            addDoc(ref,data);
            
            
           
        }
        catch(e){
            console.log("Error adding user : ", e)
        }
       
    }
    return (
        <form className='needs-validation' noValidate onSubmit={handleSave}>
            <div className="mb-3">
                <label htmlFor="registrationName" className="form-label">Registration Number</label>
                <input type="text" className="form-control" id="registrationName" required ref={registrationNameRef} />

            </div>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">Name</label>
                <input type="text" className="form-control" id="userName" required ref={nameRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="userSurname" className="form-label">Surname</label>
                <input type="text" className="form-control" id="userSurname" required ref={surNameRef} />
            </div>


            <button type="submit" className="btn btn-primary submitBtn">Save</button>
        </form>

    );
}
export default AddUser;
