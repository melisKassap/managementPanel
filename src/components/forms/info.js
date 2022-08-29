import React from 'react';

import { useState } from 'react';
import { connect } from "react-redux";

function InfoForm(props) {
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
                            <label className="fBold form-label">Reporter : </label>
                            <span className='ms-1 '>{employee.reporter}</span>
                            

                        </div>
                        <div className="mb-3">
                            <label htmlFor="taskName" className="fBold form-label">Task Name :</label>
                            <span className='ms-1 '>{employee.task}</span>
                           
                        </div>
                        <div className="mb-3">
                            <label htmlFor="created" className="fBold form-label">Created :</label>
                            <span className='ms-1 '>{employee.created}</span>
                         
                        </div>
                        <div className="mb-3">
                            <label className="fBold form-label">Assignee :</label>
                            <span className='ms-1 '>{employee.assignee}</span>

                        </div>
                        <div className="mb-3">
                            <label className="fBold form-label">Status :</label>
                            <span className='ms-1 '>{employee.status}</span>

                        </div>
                        <div className="mb-3">
                            <label className="fBold form-label">Priority :</label>
                            <span className='ms-1 '>{employee.priority}</span>

                        </div>
                      
                    </div>

                );
            })}
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
export default connect(mapStoreProps, mapDispatch)(InfoForm);
