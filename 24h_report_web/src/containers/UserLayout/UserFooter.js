import React, { Component } from "react";
import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
class UserFooter extends Component {
  render() {
    // eslint-disable-next-line

    return (
      <Box>
        <h1 style={{ color: "Aqua", textAlign: "center", marginTop: "-50px" }}>
          24h Report: Cổng thông tin
        </h1>
        <Container>
          <Row>
            <Column>
              <Heading>Về chúng tôi</Heading>
              <FooterLink href="#">Mục đích</FooterLink>
              <FooterLink href="#">Thông tin</FooterLink>
              <FooterLink href="#">Kế hoạch tương lai</FooterLink>
            </Column>
            <Column>
              <Heading>Dịch vụ</Heading>
              <FooterLink href="#">Gửi báo cáo</FooterLink>
              <FooterLink href="#">Hỗ trợ khẩn cấp</FooterLink>
              <FooterLink href="#">Xem tin tức</FooterLink>
              <FooterLink href="#">Chia sẽ thông tin</FooterLink>
            </Column>
            <Column>
              <Heading>Liên hệ với chúng tôi</Heading>
              <FooterLink href="#">aasd@gmail.com</FooterLink>
              <FooterLink href="#">090 xxx xxxx</FooterLink>
            </Column>
            <Column>
              <Heading>Mạng xã hội</Heading>
              <FooterLink href="#">
                <i className="icon-social-facebook">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="icon-social-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="icon-social-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="icon-social-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    );
  }
}

export default UserFooter;
