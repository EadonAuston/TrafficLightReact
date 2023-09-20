import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    trafficColor: "red",
  };
  render() {
    const { trafficColor } = this.state;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={`circle ${
              trafficColor === "red" ? "red" : "black"
            }`}></div>
          <div
            className={`circle ${
              trafficColor === "yellow" ? "yellow" : "black"
            }`}></div>
          <div
            className={`circle ${
              trafficColor === "green" ? "green" : "black"
            }`}></div>
        </div>
        <button
          className="next-state-button"
          onClick={() => {
            trafficColor === "red"
              ? this.setState({ trafficColor: "green" })
              : trafficColor === "green"
              ? this.setState({ trafficColor: "yellow" })
              : this.setState({ trafficColor: "red" });
          }}>
          Next State
        </button>
      </div>
    );
  }
}
