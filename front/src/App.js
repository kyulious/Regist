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
import NavAttend from "./components/nav_attendance"
import ContentAttend from "./components/content_attendance"
import { Route, Switch } from "react-router-dom"

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     mode: "main",
  //   }
  // }

  render() {
    // let _registPage,
    //   _content,
    //   _nav = null
    // if (this.state.mode === "regist") {
    //   _registPage = <Regist></Regist>
    // } else if (this.state.mode === "main") {
    //   _content = <Content></Content>
    //   // _nav = <Nav></Nav>
    // } else if (this.state.mode === "attendance") {
    //   _content = <ContentAttend />
    //   _nav = <NavAttend></NavAttend>
    // }

    return (
      <div className="App">
        {/* <Header
          changePage={function (_mode) {
            this.setState({
              mode: _mode,
            })
          }.bind(this)}
        ></Header> */}
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Content></Content>
          </Route>
          <Route path="/about">
            <Til></Til>
          </Route>
          <Route path="/board">
            <Board></Board>
          </Route>
          <Route path="/til">
            <Til></Til>
          </Route>
          <Route path="/login">
            <Til></Til>
          </Route>
          <Route path="/regist">
            <Til></Til>
          </Route>
          <Route path="/attendance">
            <Til></Til>
          </Route>
          <Route path="/boardInput">
            <BoardInput></BoardInput>
          </Route>
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

export default App
