import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Child from "./components/child";
import Parent from "./components/parent";
class App extends Component {
  state = {
    caption: "Click me",
    title: "Initial state"
  };

  changeTitle = value => {
    this.setState({
      title: value
    });
  };
  render() {
    return (
      <div>
        <Parent
          click={this.changeTitle.bind(this, "Change title")}
          caption={this.state.caption}
          title={this.state.title}
        />
      </div>
    );
  }
}

export default App;
