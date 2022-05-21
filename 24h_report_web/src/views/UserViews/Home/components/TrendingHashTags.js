import React, { Component } from "react";
import { Button, Row } from "reactstrap";

class TrendingHashTag extends Component {
  render() {
    return (
      <div>
        <Row>
          <Button
            style={{
              borderRadius: "25px",
              fontSize: "10px",
              padding: "5px",
            }}
            color="#d9d7d9"
            onClick={() => {}}
          >
            #Crypto
          </Button>
          <Button
            style={{
              borderRadius: "25px",
              fontSize: "10px",
              padding: "5px",
            }}
            color="#d9d7d9"
            onClick={() => {}}
          >
            #Banking
          </Button>
          <Button
            style={{
              borderRadius: "25px",
              fontSize: "10px",
              padding: "5px",
            }}
            color="#d9d7d9"
            onClick={() => {}}
          >
            #App
          </Button>
          <Button
            style={{
              borderRadius: "25px",
              fontSize: "10px",
              padding: "5px",
            }}
            color="#d9d7d9"
            onClick={() => {}}
          >
            #PiNetwork
          </Button>
        </Row>
      </div>
    );
  }
}
export default TrendingHashTag;
