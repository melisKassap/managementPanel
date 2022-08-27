import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import EditPopUpModal from "../popups/editpopup";
import InfoPopUpModal from "../popups/infopopup";
export class Tasks extends Component {
  constructor(props) {
    super();
    let data = [

      { t: "1", reporter: "Melis KASSAP", task: "determination of project criteria", created: "07-25-2021", priority: "Complated", status: "Critical", priorityType: "status-context status-success" },
      { t: "2", reporter: "Jane Done", task: "popup will be made", created: "08-27-2022", priority: "Waiting for Approval", status: "Major", priorityType: "status-context status-waiting" },
      { t: "3", reporter: "John Done", task: "analysis will be made", created: "06-27-2022", priority: "Incomplete", status: "Critical", priorityType: "status-context status-incomplate" },
      { t: "4", reporter: "Melis KASSAP", task: "log will be written", created: "05-27-2022", priority: "Incomplete", status: "Critical", priorityType: "status-context status-incomplate" },

    ];

    this.state = { data, labelFileter: null, textFilter: null, showModal: false, infoModalShow:false };

  }
  RemoveEachRow = (index) => {
    this.setState({
      data: this.state.data.filter((obj, idx) => idx !== index)
    })
  }
  editModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }
  infoModal = () => {
    this.setState({ infoModalShow: !this.state.infoModalShow })
  }



  render() {
    let filteredData = this.state.data;

    if (this.state.reporterFilter) {
      filteredData = this.state.data.filter(dt => dt.reporter.toLowerCase().includes(this.state.reporterFilter))

    }

    if (this.state.taskFilter) {
      filteredData = this.state.data.filter(dt => dt.task.toLowerCase().includes(this.state.taskFilter))
    }

    if (this.state.createdFilter) {
      filteredData = this.state.data.filter(dt => dt.created.toLowerCase().includes(this.state.createdFilter))
    }

    if (this.state.priorityFilter) {
      filteredData = this.state.data.filter(dt => dt.priority.toLowerCase().includes(this.state.priorityFilter))
    }
    if (this.state.statusFilter) {
      filteredData = this.state.data.filter(dt => dt.status.toLowerCase().includes(this.state.statusFilter))
    }

    return (

      <div className="task-container">
        <div className="filter-table-container">
          <div className="filter-table ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center filterTitle h-100">Filters</div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 filterInput">
              <thead>
                <tr>

                  <th scope="col">
                    Reporter
                    <br />
                    <input
                      type="text"
                      value={this.state.reporterFilter}
                      onChange={(e) =>
                        this.setState({ reporterFilter: e.target.value })
                      }
                    />
                  </th>
                  <th scope="col">
                    Task
                    <br />
                    <input
                      type="text"
                      value={this.state.taskFilter}
                      onChange={(e) =>
                        this.setState({ taskFilter: e.target.value })
                      }
                    />
                  </th>
                  <th scope="col">
                    Created
                    <br />
                    <input
                      type="text"
                      value={this.state.createdFilter}
                      onChange={(e) =>
                        this.setState({ createdFilter: e.target.value })
                      }
                    />
                  </th>
                  <th scope="col">
                    Priority
                    <br />
                    <input
                      type="text"
                      value={this.state.priorityFilter}
                      onChange={(e) =>
                        this.setState({ priorityFilter: e.target.value })
                      }
                    />
                  </th>
                  <th scope="col">
                    Status
                    <br />
                    <input
                      type="text"
                      value={this.state.statusFilter}
                      onChange={(e) =>
                        this.setState({ statusFilter: e.target.value })
                      }
                    />
                  </th>


                </tr>
              </thead>
            </div>
          </div>
        </div>

        <div className="table-items-container shadow-sm p-3 mb-5  mt-5 rounded">
          <Table>
            <thead>
              <tr>
                <th></th>
                <th scope="col">
                  Reporter

                </th>
                <th scope="col">
                  Task

                </th>
                <th scope="col">
                  Created

                </th>
                <th scope="col">
                  Priority

                </th>
                <th scope="col">
                  Status


                </th>
                <th scope="col"></th>
                <th scope="col"></th>

              </tr>
            </thead>
            <tbody>
              {filteredData.map((entry, index) => (

                <tr key={index}>
                  <th scope="row">{index}</th>

                  <td>{entry.reporter}</td>
                  <td>{entry.task}</td>
                  <td>{entry.created}</td>
                  <td className="d-flex align-items-center justify-content-center priorityContext"><span className={entry.priorityType}>{entry.priority}</span></td>

                  <td>{entry.status}</td>

                  <td className="cpointer infoBox"
                  >
                    <span onClick={() => this.infoModal()}><i class="bi bi-info-circle-fill icon-size20"></i></span>

                    
                    <InfoPopUpModal
                      show={this.state.infoModalShow}
                      onHide={() => this.infoModal()}
                    />

                  </td>
                 
                  <td className="cpointer editBox"
                  >
                    <span onClick={() => this.editModal()}><i className="bi bi-pen-fill icon-size20"></i></span>

                    
                    <EditPopUpModal
                      show={this.state.showModal}
                      onHide={() => this.editModal()}
                    />

                  </td>
                  <td className="cpointer deleteBox" onClick={() => this.RemoveEachRow(index)}>
                    <span>
                      <i className="bi bi-trash-fill text-default icon-size20"></i>
                    </span>
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        
      </div>

    );
  }
}