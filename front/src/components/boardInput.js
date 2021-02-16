import React, { Component } from "react"
import "../assets/css/boardInput.css"
import Content from "./content"
import { Route, Switch, withRouter } from "react-router-dom"

class BoardInput extends Component {
  go = () => {
    this.props.history.goBack()
  }
  render(history) {
    console.log("Board render")
    return (
      <div class="addArticle-wrapper">
        <div className="addArticle_title">
          <h1>글쓰기</h1>
        </div>

        <div className="addArticle_container">
          <div className="addArticle_form">
            <form
              action="/"
              method="post"
              onSubmit={function (e) {
                e.preventDefault()
                this.props.onSubmit(e.target.title.value)
                alert("goood")
              }.bind(this)}
            >
              <div className="addArticle_title">
                <h2>제목</h2>
                <input type="text" name="title"></input>
              </div>
              <div className="addArticle_category">
                <h2>분류</h2>
                <select>
                  <option value="article">article</option>
                  <option value="til">til</option>
                </select>
              </div>
              <div className="addArticle_contents">
                <h2>내용</h2>
                <textarea name="desc" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="addArticle_submit">
                <button onClick={this.go}>submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(BoardInput)
