import "../src/assets/css/App.css"
import React, { Component } from "react"
import Header from "./components/header"
import Content from "./components/content"
import Footer from "./components/footer"
// import Nav from "./components/nav"
import Regist from "./components/regist"
import Til from "./components/til"
import Board from "./components/board"
import BoardInput from "./components/boardInput"

// import NavAttend from "./components/nav_attendance"
import ContentAttend from "./components/content_attendance"
import { Route, Switch, withRouter } from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)
    this.max_content_id = 3
    this.state = {
      selected_content_id: 1,
      contents: [
        { id: 1, title: "커피맛집", desc: "삼청동인가?" },
        { id: 2, title: "프로젝트 하실분 !", desc: "삼청동인가?" },
        { id: 3, title: "뭐하지!", desc: "음...?" },
      ],
    }
  }

  getReadContents() {
    var i = 0
    var data = []
    for (i = 0; i < this.state.contents.length; i++) {
      data.push(this.state.contents[i])
    }
    return data
  }

  render() {
    return (
      <div className="App">
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Content data={this.getReadContents()}></Content>
          </Route>
          <Route path="/about">
            <Til></Til>
          </Route>
          <Route path="/board">
            <Board data={this.getReadContents()}></Board>
          </Route>
          <Route path="/boardInput">
            <BoardInput
              onSubmit={function (_title, _desc) {
                this.max_content_id += 1
                let _contents = Array.from(this.state.contents)

                _contents.push({
                  id: this.max_content_id,
                  title: _title,
                  desc: _desc,
                })
                this.setState({
                  contents: _contents,
                })
              }.bind(this)}
            ></BoardInput>
          </Route>
          <Route path="/til">
            <Til></Til>
          </Route>
          <Route path="/login">
            <Til></Til>
          </Route>
          <Route path="/regist">
            <Regist></Regist>
          </Route>
          <Route path="/attendance">
            <ContentAttend></ContentAttend>
          </Route>
          <Route path="/boardInput"></Route>
          <Route path="/">404 error</Route>
        </Switch>

        {/* {_nav} */}
        {/* <div id="main_content">
          {_registPage}
          {_content}
        </div> */}
        <Footer></Footer>
      </div>
    )
  }
}

export default withRouter(App)
