import React from 'react';

import { useState, useEffect } from 'react';
function EditForm(props) {

console.log("edit",props)
    return (
        <form id={props.id}>
            <div className="mb-3">
            <label  className="form-label">Reporter</label>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue >Select Reporter</option>
                    <option value="1">Melis Kassap</option>
                    <option value="2">Jane Doe</option>
                    <option value="3">John Doe</option>
                </select>

            </div>
            <div className="mb-3">
                <label htmlFor="taskName" className="form-label">Task Name</label>
                <input type="text" className="form-control" id="taskName" />
            </div>
            <div className="mb-3">
                <label htmlFor="created" className="form-label">Created</label>
                <input type="date" className="form-control" id="created" />
            </div>
            <div className="mb-3">
            <label  className="form-label">Assignee</label>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue >Select Assignee</option>
                    <option value="1">Melis Kassap</option>
                    <option value="2">Jane Doe</option>
                    <option value="3">John Doe</option>
                </select>

            </div>
            <div className="mb-3">
            <label  className="form-label">Status</label>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue >Select Status</option>
                    <option value="1">Critical</option>
                    <option value="2">Major</option>
                    <option value="3">Low</option>
                </select>

            </div>
            <div className="mb-3">
            <label  className="form-label">Priority</label>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue >Select Priority</option>
                    <option value="1">Complated</option> 
                    <option value="2">Waiting for Approval</option>
                    <option value="3">Incomplete</option>
                </select>

            </div>
           
            <button type="submit" className="btn btn-primary submitBtn">Save</button>
        </form>

    );
}
export default EditForm;
