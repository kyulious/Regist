import React, {Component} from "react"
import WeekComponent from "./WeekComponent"

class ContentAttend extends Component {
  //render 필수
  constructor(props){
    super(props);
    this.state = {
        userId: 0,
        period : 2,
        weeks: 11

    }
  }

  setUserInfo = (ID, prd, weekCnt) =>{
    this.setState({
      userID: ID,
      period: prd,
      weeks: weekCnt
    })
  }

  render() {
    console.log("Content attendance render");

    const borderStyle = {
      border: "1px solid black"
    }
    return (
      <div className = "wrapperAttend">
        <div className = "NavAttend" style = {borderStyle}>
          <ol>
            <li> 출석부 </li>
            <li> 주간목표 </li>
          </ol>
        </div>

        <div className = "MainAttend" style = {borderStyle}>
          <div className = "AttendTable" style = {borderStyle}>

          </div>
        </div>
      </div>

    )
  }
}

export default ContentAttend
