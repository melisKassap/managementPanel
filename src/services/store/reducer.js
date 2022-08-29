const initialState = {

    taskList: [{ t: "0", reporter: "Melis KASSAP", task: "determination of project criteria", assignee: "Jane Doe", created: "07-25-2021", priority: "Complated", status: "Critical", priorityType: "status-context status-success" },
    { t: "1", reporter: "Jane Doe", task: "popup will be made", created: "08-27-2022", assignee: "Melis KASSAP", priority: "Waiting for Approval", status: "Major", priorityType: "status-context status-waiting" },
    { t: "2", reporter: "John Doe", task: "analysis will be made", created: "06-27-2022", assignee: "John Doe", priority: "Incomplete", status: "Critical", priorityType: "status-context status-incomplate" },
    { t: "3", reporter: "Melis KASSAP", task: "log will be written", created: "05-27-2022", assignee: "Jane Doe", priority: "Incomplete", status: "Critical", priorityType: "status-context status-incomplate" },
    ]
// taskList:1,
    
}

const reducer = (state = initialState, action)=>{
    if(action.type === "Get_task_list"){
      return{
        ...state,
        taskList:state.taskList
      }
    }
    return state;
}

export default reducer;