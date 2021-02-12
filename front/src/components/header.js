import React, { Component } from "react"
import profile from "../assets/image/Dog_23.png"

class Header extends Component {
  //render 필수
  render() {
    console.log("Header render")
    return (
      <div class="main-nav">
        <p class="main-logo">
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault()
              this.props.changePage("main")
            }.bind(this)}
          >
            J2KB
          </a>
        </p>
        <span className="flexgrowBlank"></span>
        <span class="main-nav menu">J2KB?</span>
        <span class="main-nav menu">Board</span>
        <span class="main-nav menu">TIL</span>
        <span class="main-nav menu">Login</span>
        <span class="main-nav menu">
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault()
              this.props.changePage("regist")
            }.bind(this)}
          >
            regist
          </a>
        </span>
        <span class="main-nav menu">
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault()
              this.props.changePage("attendance")
            }.bind(this)}

          >
            Attendance
          </a>
        </span>
        {/* <span class="main-nav menu logged">환영합니다! </span> */}
        <img src={profile} alt="환영합니다!" class="profile" />
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
