import React, { Component } from "react";
import { Button, Col, Row } from "reactstrap";
const styles = {
  borderRadius: "25px",
  fontSize: "10px",
  padding: "5px",
  boxShadow: "1px 1px rgba(0, 0, 0, 30%)",
  marginLeft: "1rem",
};
const style2 = {
  marginTop: "auto",
  paddingLeft: "1rem",
  paddingRight: "0.5rem",
};
class TrendingHashTag extends Component {
  render() {
    return (
      <Row>
        <Col xs="12" sm="2" lg="2" xl="2" style={style2}>
          <h6>Từ khóa nổi bật:</h6>
        </Col>

        <Col xs="12" sm="9" lg="9" xl="10" style={style2}>
          <Button style={styles} color="#d9d7d9" onClick={() => {}}>
            #Crypto
          </Button>
          <Button style={styles} color="#d9d7d9" onClick={() => {}}>
            #Banking
          </Button>
          <Button style={styles} color="#d9d7d9" onClick={() => {}}>
            #App
          </Button>
          <Button style={styles} color="#d9d7d9" onClick={() => {}}>
            #PiNetwork
          </Button>
        </Col>
      </Row>
    );
  }
}
export default TrendingHashTag;
