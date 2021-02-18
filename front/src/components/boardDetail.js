import React, { Component } from "react"
// import "../assets/css/boardMain.css"
import { NavLink, useParams } from "react-router-dom"
function BoardDetail(props) {
  console.log("Boardshow render")
  console.log("show: ", props.show)

  let params = useParams()
  let topics_id = params.topics_id

  let selected_topic = [{ title: "no data", desc: "no data" }]
  let num = props.data.length - 1

  for (var i = num; num >= 0; i--) {
    if (props.data[i].id === Number(topics_id)) {
      selected_topic[0] = props.data[i].title
      selected_topic[1] = props.data[i].desc
      console.log(props.data[i].id)

      break
    }
  }

  return (
    <div class="board-wrapper">
      <h1>{selected_topic[0]}</h1>
      <h1>{selected_topic[1]}</h1>
    </div>
  )
}

export default BoardDetail
