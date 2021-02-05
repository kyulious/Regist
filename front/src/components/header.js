import React, { Component } from "react"

class Header extends Component {
  //render 필수
  render() {
    console.log("Header render")
    return (
      <div className="header">
        <h1>
          <a
            href="/"
            // onClick={function (e) {
            //   e.preventDefault()
            // }}
          >
            J2KB
          </a>
        </h1>
        <div className="space"></div>
        <div>
          <a href="/login">login</a>
        </div>
        <div>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault()
              this.props.changePage("regist")
            }.bind(this)}
          >
            regist
          </a>
        </div>
        <div>
          <a
            href="/" // App.js의 main만 변형할 예정이라 href 불필요.
            onClick={(e) => {
              e.preventDefault();
              this.props.changePage("navAttend")
            }}
          >
            attendance
          </a>
        </div>
      </div>
    )
  }
}

export default Header
