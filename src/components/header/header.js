import React, { Component } from "react";
import adminImage from '../../images/admin.png';
import woman from '../../images/woman.png';
import man from '../../images/man.png';
import AddUserPopUp from "../popups/addUserPopUp";
import AddNewTaskPopUp from "../popups/addNewTaskPopUp";

export class Header extends Component {
  constructor(props) {
    super();


    this.state = { addUserModalShow: false, addNewTaskModalShow: false };

  }
  addUserModal = () => {
    this.setState({ addUserModalShow: !this.state.addUserModalShow })
  }
  addNewTaskModal = () => {
    this.setState({ addNewTaskModalShow: !this.state.addNewTaskModalShow })
  }
  render() {
    return (
      <div className="header-container">

        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center header-top w-100">
          Management Panel
        </div>
        <div className="container no-padding">
          <div className="header-menu d-flex shadow-sm p-3 mb-4  mt-3 rounded">
            <div className="col-lg-5 col-md-5 col-sm-2 col-1 header-left-menu">
              Task List
            </div>
            <div className="col-lg-7 col-md-7 col-sm-10 col-11 d-flex align-items-center header-right-menu">
          
              <div className="offset-lg-2 col-lg-3 col-md-3 col-sm-4 col-5"><span className="headerTitle cpointer">All Tasks</span></div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-4" onClick={() => this.addNewTaskModal()}><span className="headerTitle cpointer">New Tasks</span></div>

              <div className="col-lg-4 col-md-6 col-sm-4 col-2 dropdown header-user-menu">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img className="avatarImage" src={adminImage} />
                 <span className="titleUserName">Melis KASSAP</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" ><span><img className="avatarImage" src={woman} /></span>User 2</a>
                  <a className="dropdown-item" ><span><img className="avatarImage" src={man} /></span>User 3</a>
                  <a className="dropdown-item" onClick={() => this.addUserModal()}><span><i className="bi bi-person-plus-fill avatarImage icon-size20"></i></span>Add New</a>

                </div>
              </div>

            </div>
          </div>
        </div>
        <AddUserPopUp
          show={this.state.addUserModalShow}
          onHide={() => this.addUserModal()}
          

        />
        <AddNewTaskPopUp
          show={this.state.addNewTaskModalShow}
          onHide={() => this.addNewTaskModal()}
         

        />

      </div>
    )
  }
}