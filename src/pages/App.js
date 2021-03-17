import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/app.css";

import titles from "../assets/docs/data.json";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     day: "Wednesday",
  //     date: 17,
  //   };
  // }
  state = {
    day: "Wednesday",
    date: 17,
    clicked: 0,
    buttonList: [
      {
        title: "Update",
        action: () => this.forceUpdate(),
      },
      {
        title: "Tomorrow",
        action: () =>
          this.setState({
            date: 18,
          }),
      },
      {
        title: "Click Me",
        action: () =>
          this.setState((prevState) => ({ clicked: prevState.clicked + 1 })),
      },
      {
        title: "Go to Demo",
        action: () => this.props.history.push(`/demo/2?q=${this.state.input}`),
      },
    ],
    input: "Put Your Input Here",
  };
  componentDidMount() {
    console.log("did mount");
  }
  // componentDidUpdate(_, prevState) {
  //   console.log("did update", prevState, this.state);
  // }
  componentWillUnmount() {}
  inputChangeHandler = (e) => {
    const { value } = e.target;
    // const value = "";
    this.setState({
      input: value,
    });
  };
  render() {
    const { location } = this.props;
    console.log(titles);
    // console.log("render", location);
    return (
      <>
        <Header data={this.state.clicked} />
        <main>
          <p
            className={
              !location.state
                ? "title green"
                : location.state.code === 1
                ? "title red"
                : "title blue"
            }
          >
            Class Component
          </p>
          <p className="title">
            Today is {`${this.state.day}, ${this.state.date} Maret 2021`}
          </p>
          {/* <p>Clicked {this.state.clicked} times</p> */}
          <ButtonCollection data={this.state.buttonList} />
          <input
            type="text"
            value={this.state.input}
            onChange={this.inputChangeHandler}
          />
        </main>
        <Footer />
      </>
    );
  }
}

const ButtonCollection = (props) => {
  let buttonCollectionList = [];
  const buttons = props.data;
  buttons.map((button, index) =>
    buttonCollectionList.push(
      <button
        key={index}
        onClick={button.action || (() => console.log("no action"))}
        style={{ display: "block" }}
      >
        {button.title}
      </button>
    )
  );
  // for (let i = 0; i < props.repeat; i++) {
  //   buttonCollectionList.push(
  //     <>
  //       <button>UPDATE</button>
  //       <br />
  //     </>
  //   );
  // }
  return buttonCollectionList;
};

export default App;
