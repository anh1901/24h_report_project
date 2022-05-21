import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import FeaturedPosts from "./components/FeaturedPosts";
import TrendingHashTag from "./components/TrendingHashTags";
import DateWidget from "./components/DateWidget";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Row>
          <Col xs="12" sm="9" lg="9">
            <TrendingHashTag />
          </Col>
          <Col xs="12" sm="3" lg="3" style={{ marginTop: "0.5rem" }}>
            <DateWidget />
          </Col>
        </Row>
        <FeaturedPosts />
      </div>
    );
  }
}
export default Home;
