import React, { useState, useEffect } from "react"
// import "../assets/css/boardMain.css"
import { NavLink, useParams } from "react-router-dom"
import "../assets/css/boardDetail.css"
function BoardDetail(props) {
  console.log("Boardshow render")

  let { topics_id } = useParams()

  let selected_topic = [{ title: "no data", desc: "no data" }]
  // let num = data.data.length - 1

  // for (var i = num; num >= 0; i--) {
  //   if (props.data[i].id === Number(topics_id)) {
  //     selected_topic[0] = props.data[i].title
  //     selected_topic[1] = props.data[i].desc

  //     break
  //   }
  // }
  let dataId = props.data.find(function (idid) {
    return idid.id == topics_id
  })

  useEffect(() => {
    return () => {
      props._show(true)
    }
  })
  return (
    <div className="boardDetail_wrapper">
      <div className="detail_info">
        <div className="detail_title">
          <h2>제목 : {dataId.title}</h2>
        </div>
        <hr />
        <div className="detail_name">
          <h2>작성자 : 작성자</h2>
        </div>
        <div className="detail_desc">
          <h2>내용 : {dataId.desc}</h2>
        </div>
      </div>
    </div>
  )
}

export default BoardDetail
