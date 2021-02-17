import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import "../assets/css/boardMain.css"
import { NavLink } from "react-router-dom"
class Board extends Component {
  //render 필수
  render() {
    console.log("Board render")
    var boardContents = []
    var i = this.props.data.length - 1
    var num = 1
    while (i >= 0) {
      boardContents.push(
        <div className="board_contents" key={this.props.data[i].id}>
          <span className="board_num">{num}</span>
          <p className="contents_title">{this.props.data[i].title}</p>
          {/* <p className="contents_desc">{this.props.data[i].desc}</p> */}
        </div>
      )
      i--
      num++
    }
    return (
      <div class="board-wrapper">
        <div className="board_box">
          {/* <div class="main-board">
          <div class="board-title">
            <h1>게시판</h1>
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
        </div> */}
          <div className="board_top">
            <div className="board_title">
              <h1>게시판</h1>
            </div>
            <NavLink to="/boardInput" className="board_inputBtn">
              <FontAwesomeIcon icon={faPlusSquare} />
            </NavLink>
          </div>
          <div className="board_content">
            <div className="board_container">
              {/* <div className="contents">카페 추천합니다</div>
            <div className="contents">sqld대회 일정</div>
            <div className="contents">스터디 모집</div>
            <div className="contents">기타 등등</div>
            <div className="contents">기타 등등</div>
            <div className="contents">등등</div> */}
              {boardContents}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Board
