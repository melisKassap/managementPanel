import React, { Component } from "react";
import adminImage from '../images/admin.png';
import woman from '../images/woman.png';
import man from '../images/man.png';
export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        {/* title
        meta tagları da bak nereye ekliyoruz */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center header-top w-100">
          Management Panel
        </div>
        <div className="container">
          <div className="header-menu d-flex shadow-sm p-3 mb-5  mt-5 rounded">
            <div className="col-lg-7 col-md-7 col-sm-3 col-3 header-left-menu">
              Task List
            </div>
            <div className="col-lg-5 col-md-5 col-sm-9 col-9 d-flex align-items-center header-right-menu">
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">All Tasks</div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">Tasks</div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-4 dropdown header-user-menu">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="avatarImage" src={adminImage} />
                  User 1
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" ><span><img className="avatarImage" src={woman} /></span>User 2</a>
                  <a className="dropdown-item" ><span><img className="avatarImage" src={man} /></span>User 3</a>

                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    )
  }
}