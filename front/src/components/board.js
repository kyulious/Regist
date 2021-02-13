import React, { Component } from "react"
import "../assets/css/boardMain.css"
class Board extends Component {
  //render 필수
  render() {
    console.log("Board render")
    return (
      <div class="board-wrapper">
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
        <div className="board_title">
          <h1>게시판</h1>
        </div>
        <div className="board_content">
          <div className="content_container">
            <div className="contents">카페 추천합니다</div>
            <div className="contents">sqld대회 일정</div>
            <div className="contents">스터디 모집</div>
            <div className="contents">기타 등등</div>
            <div className="contents">기타 등등</div>
            <div className="contents">등등</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Board
