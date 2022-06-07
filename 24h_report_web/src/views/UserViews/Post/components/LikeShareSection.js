import React from "react";
import { Button, Col, Row } from "reactstrap";
import styled from "styled-components";
const styles = { paddingTop: "0.5rem" };
const Header = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const ShareLink = styled.a`
  color: #000000;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;
export function LikeShareSection() {
  return (
    <Header>
      <Row>
        <Col xs="3" md="3" sm="3" lg="3" xl="3">
          <Button style={{ background: "linear-gradient(to right,#56CCF2,#2F80ED)"}} className="text-white" href="#">
            <i className="icon-like"/> Thích <b>123</b>
          </Button>
        </Col>
        <Col xs="3" md="3" sm="3" lg="3" xl="3" style={styles}>
          <h4>Chia sẻ:</h4>
        </Col>
        <Col xs="2" md="2" sm="2" lg="2" xl="2" style={styles}>
          <ShareLink href="#">
            <i className="icon-social-facebook">
              <span style={{ marginLeft: "10px" }}></span>
            </i>
          </ShareLink>
        </Col>
        <Col xs="2" md="2" sm="2" lg="2" xl="2" style={styles}>
          <ShareLink href="#">
            <i className="icon-social-instagram">
              <span style={{ marginLeft: "10px" }}></span>
            </i>
          </ShareLink>
        </Col>
        <Col xs="2" md="2" sm="2" lg="2" xl="2" style={styles}>
          <ShareLink href="#">
            <i className="icon-social-twitter">
              <span style={{ marginLeft: "10px" }}></span>
            </i>
          </ShareLink>
        </Col>
      </Row>
    </Header>
  );
}
