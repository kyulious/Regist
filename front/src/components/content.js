import React, { Component } from "react"

class Content extends Component {
  //render 필수
  render() {
    console.log("Content render")
    return (
      <div className="contents">
        <h2 className="contents_head"> Articles</h2>
        <div className="list">
          <div>TIL</div>
          <div>JS</div>
          <div>SPRING</div>
          <div>BEAN</div>
          <div>DOM</div>
        </div>
      </div>
    )
  }
}

export default Content
