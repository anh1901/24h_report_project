import React, { Component } from "react";

class DateWidget extends Component {
  constructor() {
    super();

    var today = new Date(),
      time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    this.state = {
      currentTime: time,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString(),
      });
    }, 1000);
  }
  render() {
    return (
      <div style={{ textAlign: "right" }}>
        <i className="icon-clock" /> {this.state.currentTime}
      </div>
    );
  }
}
export default DateWidget;
