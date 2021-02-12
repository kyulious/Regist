import React, { Component } from "react"
import profile from "../assets/image/Dog_23.png"
import { Link } from "react-router-dom"
class Header extends Component {
  //render 필수
  render() {
    console.log("Header render")
    return (
      <div class="main-nav">
        <p class="main-logo">
          <Link to="/">J2KB</Link>
        </p>
        <span className="flexgrowBlank"></span>
        <span class="main-nav menu">
          <Link to="/about">J2KB?</Link>
        </span>
        <span class="main-nav menu">
          <Link to="/board">Board</Link>
        </span>
        <span class="main-nav menu">
          <Link to="/til">TIL</Link>
        </span>
        <span class="main-nav menu">
          <Link to="/login">Login</Link>
        </span>
        <span class="main-nav menu">
          <Link to="/regist">regist</Link>
        </span>
        <span class="main-nav menu">
          <Link to="/attendance">Attendance</Link>
        </span>
        <span class="main-nav menu">환영합니다!</span>
        <img src={profile} alt="logged" class="profile" />
      </div>
      // <div className="header">
      //   <h1>
      // <a
      //   href="/"
      //   // onClick={function (e) {
      //   //   e.preventDefault()
      //   // }}
      // >
      //   J2KB
      //     </a>
      //   </h1>
      //   <div className="space"></div>
      //   <div>
      //     <a href="/login">login</a>
      //   </div>
      //   <div>
      // <a
      //   href="/"
      //   onClick={function (e) {
      //     e.preventDefault()
      //     this.props.changePage("regist")
      //   }.bind(this)}
      // >
      //   regist
      //     </a>
      //   </div>
      //   <div>
      //     <a
      //       href="/" // App.js의 main만 변형할 예정이라 href 불필요.
      //       onClick={(e) => {
      //         e.preventDefault();
      //         this.props.changePage("navAttend")
      //       }}
      //     >
      //       attendance
      //     </a>
      //   </div>
      // </div>
    )
  }
}

export default Header
