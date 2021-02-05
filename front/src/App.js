import "./App.css"
import React, { Component } from "react"
import Header from "./components/header"
import Content from "./components/content"
import Footer from "./components/footer"
import Nav from "./components/nav"
import Regist from "./components/regist"
import NavAttend from "./components/nav_attendance"
import ContentAttend from "./components/content_attendance"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: "main",
    }
  }

  render() {
    let _registPage,
      _content,
      _nav = null
    if (this.state.mode === "regist") {
      _registPage = <Regist></Regist>
    } else if (this.state.mode === "main") {
      _content = <Content></Content>
      _nav = <Nav></Nav>
    } else if (this.state.mode === "navAttend"){
      _content = <ContentAttend />
      _nav = <NavAttend></NavAttend>
    }


    return (
      <div className="App">
        <Header
          changePage={function (_mode) {
            this.setState({
              mode: _mode,
            })
          }.bind(this)}
        ></Header>

        <div className="main">

          <div id="main_nav">
            {_nav}
          </div>
          <div id="main_content">
            {_registPage}
            {_content}
          </div>

        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default App
// import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
// import './App.css';
// function App () {
// const [message, setMessage] = useState("");
// useEffect(() => {
// fetch('')
// .then(response => response.text())
// .then(message => {
// setMessage(message);
// });
// },[])
// return (
// <div className="App">
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo"/>
// <h1 className="App-title">{message}</h1>
// </header>
// <p className="App-intro">
// To get started, edit <code>src/App.js</code> and save to reload.
// </p>
// </div>
// )
// }
// export default App;
