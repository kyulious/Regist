import React, {Component} from "react"
// import WeekComponent from "./WeekComponent"

class ContentAttend extends Component {
  //render 필수
  constructor(props){
    super(props);
    this.state = {
        userId: 0,
        // period : 2,
        totalweeks: 11,
        attendList: [1,1,0,1,0]
    }
  }
  setUserInfo = (ID, weekCnt, attList) =>{
    this.setState({
      userID: ID,
      // period: prd,
      weeks: weekCnt,
      attendList: attList
    })
  }

  render() {

    console.log("Content attendance render");
    const borderStyle = {
      border: "1px solid black"
    }
    const weekList = [];


    for(let i =0; i <this.state.totalweeks; ++i){
        weekList.push({weekIdx: i, attendance: this.state.attendList[i]});
    }
    console.log(weekList);

    function convertAttend(attend) {
      if(attend == 0){
        return "결석 😢";
      }
      else {
        return attend && "출석 😊";
      }

    }

    const weekRender = weekList.map((week, i) => {
      return (
        <div key = {i} className = "AttendTable">

        <div className = "WeekIdx">{week.weekIdx+1} 주차</div>
        <div className = {this.state.attendList[i] === 1? "present" :(this.state.attendList[i] === 0 ? "absent": "Undefined")}>

          {convertAttend(week.attendance)}

        </div>

        </div>
      );
    })


    return (
      <div className = "wrapperAttend">
        <div className = "NavAttend">
          <ol>
            <li> 출석부 </li>
            <li> 주간목표 </li>
          </ol>
        </div>

        <div className = "MainAttend">
            {weekRender}
        </div>
      </div>



    )
  }
}

export default ContentAttend
