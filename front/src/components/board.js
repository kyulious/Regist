import React, { Component, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import "../assets/css/boardMain.css"
import { NavLink, Route, useParams } from "react-router-dom"
import BoardDetail from "./boardDetail"

function Board(props) {
  console.log("Board render")

  var boardContents = []
  var i = props.data.length - 1
  var num = 1
  let [show, showChange] = useState(true)

  while (i >= 0) {
    boardContents.push(
      <NavLink to={"/board/" + props.data[i].id}>
        <div
          className="board_contents"
          key={props.data[i].id}
          onClick={() => showChange(false)}
        >
          <span className="board_num">{num}</span>
          <p className="contents_title">{props.data[i].title}</p>
        </div>
      </NavLink>
    )
    i--
    num++
  }
  useEffect(() => {
    console.log("useEffect board")
    return { boardContents }
  }, [show])

  return (
    <div class="board-wrapper">
      <div className="board_box">
        <div className="board_top">
          <div className="board_title">
            <h1>게시판</h1>
          </div>
          <NavLink to="/boardInput" className="board_inputBtn">
            <FontAwesomeIcon icon={faPlusSquare} />
          </NavLink>
        </div>
        {show ? (
          <div className="board_content">
            <div className="board_container">{boardContents}</div>
          </div>
        ) : (
          <Route path="/board/:topics_id">
            <BoardDetail data={props.data} _show={showChange}></BoardDetail>
          </Route>
        )}

        {/* <div className="board_container">{boardContents}</div>
          <Route path="/board/:topics_id">
            <BoardDetail data={props.data} _show={showChange}></BoardDetail>
          </Route> */}
      </div>
    </div>
  )
}
export default Board
