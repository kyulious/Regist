import React, {Component} from "react"

class WeekInfo extends Component {
  //render 필수
  render() {
    console.log("WeekInfo render");

    return (
      <div className = "WeekInfo">
        <div>
        {this.props.weekIdx++} + "주차";
        </div>
        <div>
        "출석 현황: " + {this.props.attendance};
        </div>
      </div>
    )
  }
}

export default WeekInfo
