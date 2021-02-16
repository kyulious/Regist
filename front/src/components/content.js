import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import "../assets/css/App.css"
import { NavLink } from "react-router-dom"
class Content extends Component {
  shouldComponentUpdate(newProps, newState) {
    console.log(
      "===> TOC render shouldComponentUpdate",
      newProps.data,
      this.props.data
    )

    if (this.props.data === newProps.data) {
      return false
    }

    return true
  }

  render() {
    console.log("Content render")
    console.log(this.props.data)

    var titleLists = []
    var i = 0
    while (i < this.props.data.length) {
      titleLists.push(
        <div class="content" key={this.props.data[i].id}>
          <p class="subtitle">{this.props.data[i].title}</p>
        </div>
      )
      i++
    }

    return (
      <div class="wrapper">
        <div class="main-board">
          <div class="board-title">
            <h1>
              최신글
              <NavLink to="/boardInput" className="addContent">
                <FontAwesomeIcon icon={faPlusSquare} />
              </NavLink>
            </h1>
          </div>
          <div class="board-content">
            {/* <div class="content">
              <p class="subtitle">{this.props.title}</p>
            </div>
            <div class="content">
              <p class="subtitle">{this.props.title}</p>
            </div>
            <div class="content">
              <p class="subtitle">{this.props.title}</p>
            </div> */}
            {titleLists}
          </div>
        </div>

        <div class="main-til">
          <div class="til-title">
            <h1>
              최신TIL
              <a href="/" className="addContent">
                <FontAwesomeIcon icon={faPlusSquare} />
              </a>
            </h1>
          </div>
          <div class="til-content">
            <div class="content">
              <p class="subtitle">React를 배워보자</p>
            </div>
            <div class="content">
              <p class="subtitle">JS기본원리</p>
            </div>
            <div class="content">
              <p class="subtitle">DOM이란?</p>
            </div>
          </div>
        </div>

        <div class="main-summary">
          <div class="summary-title">
            <h1>
              Summary
              <a href="/" className="addContent">
                <FontAwesomeIcon icon={faPlusSquare} />
              </a>
            </h1>
          </div>
          <div class="summary-content">
            <div class="content">
              <p class="subtitle">공지사항</p>
            </div>
            <div class="content">
              <p class="subtitle">오늘의 TIL수</p>
            </div>
            <div class="content">
              <p class="subtitle">회원수</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content
