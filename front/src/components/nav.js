import React, { Component } from "react"

class Nav extends Component {
  //render 필수
  render() {
    console.log("nav render")

    return (
      <div className="main_nav">
        <h2>Menu</h2>
        <div>1</div>
        <div>2</div>
      </div>
    )
  }
}

export default Nav
