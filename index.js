import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

class Pics extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDom.render(<Pics />, document.querySelector("#root"));
