import React from 'react';

import { useState } from 'react';
import { connect } from "react-redux";

function EditForm(props) {
    const [tempTaskList, setTempTaskList] = useState(props.taskList);
  

    const getTaskElement = tempTaskList.filter(employee => {

        return parseInt(employee.t) === props.id;
    });


    return (
        <form id={props.id}>
            {getTaskElement.map(employee => {
                return (
                    <div key={employee.t}>
                        <div className="mb-3">
                            <label className="form-label">Reporter</label>
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue >{employee.reporter}</option>
                                <option value="1">Melis Kassap</option>
                                <option value="2">Jane Doe</option>
                                <option value="3">John Doe</option>
                            </select>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="taskName" className="form-label">Task Name</label>
                            <input placeholder={employee.task} type="text" className="form-control" id="taskName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="created" className="form-label">Created</label>
                            <input placeholder={employee.created} type="date" className="form-control" id="created" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Assignee</label>
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue >{employee.assignee}</option>
                                <option value="1">Melis Kassap</option>
                                <option value="2">Jane Doe</option>
                                <option value="3">John Doe</option>
                            </select>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue >{employee.status}</option>
                                <option value="1">Critical</option>
                                <option value="2">Major</option>
                                <option value="3">Low</option>
                            </select>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Priority</label>
                            <select className="form-select" aria-label="Default select example">
                                <option defaultValue >{employee.priority}</option>
                                <option value="1">Complated</option>
                                <option value="2">Waiting for Approval</option>
                                <option value="3">Incomplete</option>
                            </select>

                        </div>
                      
                    </div>

                );
            })}


            <button type="submit" className="btn btn-primary submitBtn">Save</button>
        </form>

    );

}

const mapStoreProps = (store) => {
    return {
        taskList: store.taskList,

    }
}

const mapDispatch = dispach => {
    return {
        getTask: () => dispach({ type: "Get_task_list", taskList: "" })
    }
}
export default connect(mapStoreProps, mapDispatch)(EditForm);
