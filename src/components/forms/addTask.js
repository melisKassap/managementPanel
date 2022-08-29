import React, { useRef, useState } from 'react';

import { firestore } from '../../services/firebase';

import { addDoc, collection } from "@firebase/firestore";
function AddTask() {

    const [assignee, setAssignee] = useState();
    const [reporter, setReporter] = useState();
    const [status, setStatus] = useState();
    const [priority, setPriority] = useState();
    const [priorityType, setPriorityType] = useState();

    const registrationNameRef = useRef();
    const taskNameRef = useRef();
    const createfRef = useRef();
    const surNameRef = useRef();

    const ref = collection(firestore, "taskList");

    const selectAssignee = (e) => {
        setAssignee(e.target.value);
    }
    const selectReporter = (e) => {
        setReporter(e.target.value);
    }

    const selectStatus = (e) => {
        setStatus(e.target.value);
    }

    const selectPriority = (e) => {
        
        if(e.target.value == "Complated"){
            setPriorityType("status-context status-success");
            setPriority(e.target.value);
        }
        else if(e.target.value == "Waiting for Approval"){
            setPriorityType("status-context status-waiting");
            setPriority(e.target.value);
        }else if(e.target.value == "Incomplete"){
            setPriorityType("status-context status-incomplate");
            setPriority(e.target.value);
        }else{
            setPriorityType("status-context");
            setPriority(e.target.value);
        }
    }


    const handleSave = async (e) => {
        e.preventDefault();
        let data = {
            registrationName: registrationNameRef.current.value,
            reporter: reporter,
            taskName: taskNameRef.current.value,
            created: createfRef.current.value,
            assignee: assignee,
            status: status,
            priority: priority,
            priorityType: priorityType
        }
        try {
            addDoc(ref, data);
        }
        catch (e) {
            console.log("Error adding task : ", e)
        }

    }
    return (
        <form className='needs-validation' noValidate onSubmit={handleSave}>
            <div className="mb-3">
                <label htmlFor="registrationName" className="form-label">Registration Number</label>
                <input type="text" className="form-control" id="registrationName" required ref={registrationNameRef} />

            </div>
            <div className="mb-3">
                <label className="form-label">Reporter</label>
                <select className="form-select" aria-label="Default select example" onChange={selectReporter} required >
                    <option defaultValue >Select Reporter</option>
                    <option value="Melis Kassap">Melis Kassap</option>
                    <option value="Jane Doe">Jane Doe</option>
                    <option value="John Doe">John Doe</option>
                </select>

            </div>
            <div className="mb-3">
                <label htmlFor="registrationName" className="form-label">Task Name</label>
                <input type="text" className="form-control" id="registrationName" required ref={taskNameRef} />

            </div>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">Created</label>
                <input type="date" className="form-control" id="userName" required ref={createfRef} />
            </div>
            <div className="mb-3">
                <label className="form-label">Assignee</label>
                <select className="form-select" aria-label="Default select example" onChange={selectAssignee} required >
                    <option defaultValue >Select Assignee</option>
                    <option value="Melis Kassap">Melis Kassap</option>
                    <option value="Jane Doe">Jane Doe</option>
                    <option value="John Doe">John Doe</option>
                </select>

            </div>
            <div className="mb-3">
                <label className="form-label">Status</label>
                <select className="form-select" onChange={selectStatus} required>
                    <option defaultValue >Select Status</option>
                    <option value="Critical">Critical</option>
                    <option value="Major">Major</option>
                    <option value="Low">Low</option>
                </select>

            </div>
            <div className="mb-3">
                <label className="form-label">Priority</label>
                <select className="form-select" onChange={selectPriority} required>
                    <option defaultValue >Select Priority</option>
                    <option value="Complated">Complated</option>
                    <option value="Waiting for Approval">Waiting for Approval</option>
                    <option value="Incomplete">Incomplete</option>
                </select>

            </div>


            <button type="submit" className="btn btn-primary submitBtn">Save</button>
        </form>


    );
}
export default AddTask;
