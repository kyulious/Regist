import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import "../assets/css/App.css"
import { NavLink } from "react-router-dom"
class Content extends Component {
  //render 필수
  render() {
    console.log("Content render")
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
            <div class="content">
              <p class="subtitle">1</p>
            </div>
            <div class="content">
              <p class="subtitle">2</p>
            </div>
            <div class="content">
              <p class="subtitle">3</p>
            </div>
            <div class="content">
              <p class="subtitle">4. 일정 갯수 넘어가면 스크롤</p>
            </div>
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
