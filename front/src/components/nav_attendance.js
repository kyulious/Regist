import React, { Component } from "react"

class NavAttend extends Component {
  //render 필수
  render() {
    console.log("NavAttend render")
    return (
      <div className="navAttend">
        <ol>
          <li>출석부</li>
          <li>주간 목표</li>
          <li>점수표</li>
        </ol>
      </div>
    )
  }
}

export default NavAttend
