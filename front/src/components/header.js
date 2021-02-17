import React, { Component, useState } from "react"
import profile from "../assets/image/Dog_23.png"
import { NavLink } from "react-router-dom"
import Modal from "./modal"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false, setShow: false }
  }

  handleShow() {
    this.setState({
      setShow: true,
    })
  }
  handleClose() {
    this.setState({
      setShow: false,
    })
  }

  render() {
    console.log("Header render")
    return (
      <div class="main-nav">
        <p class="main-logo">
          <NavLink to="/">J2KB</NavLink>
        </p>
        <span className="flexgrowBlank"></span>
        <span class="main-nav menu">
          <NavLink to="/about">J2KB?</NavLink>
        </span>
        <span class="main-nav menu">
          <NavLink to="/board">Board</NavLink>
        </span>
        <span class="main-nav menu">
          <NavLink to="/til">TIL</NavLink>
        </span>
        <span class="main-nav menu">
          {/* <NavLink to="/login">Login</NavLink> */}
          <React.Fragment>
            <a onClick={this.handleShow.bind(this)}> 로그인</a>
            <Modal
              open={this.state.setShow}
              close={this.handleClose.bind(this)}
              title="login"
            >
              <div className="signIn_wrapper">
                <div className="signIn_box">
                  <div className="signIn_id">
                    <form action="">
                      <div className="signIn_email">
                        E-mail : <input type="text"></input>
                      </div>
                      <div className="signIn_pw">
                        PW: <input type="password"></input>
                      </div>
                      <button value="login">로그인</button>
                    </form>
                  </div>
                </div>
              </div>
            </Modal>
          </React.Fragment>
        </span>
        <span class="main-nav menu">
          <NavLink to="/regist">regist</NavLink>
        </span>
        <span class="main-nav menu">
          <NavLink to="/attendance">Attendance</NavLink>
        </span>
        <span class="main-nav menu">환영합니다!</span>
        <img src={profile} alt="logged" class="profile" />
      </div>
    )
  }
}

export default Header
