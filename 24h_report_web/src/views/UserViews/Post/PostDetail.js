import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "reactstrap";
import { Comments } from "./components/Comments";
import { PostDataDetail } from "./components/PostDataDetail";
import { OtherPosts } from "./components/OtherPosts";
import {
  CommentArea,
  Container,
  Item,
  Number,
  OtherView,
  PostData,
  SlickBar,
  Text,
} from "./components/styles";

const PostDetail = (props) => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div>
      <Container>
        <SlickBar>
          <Item exact to="#" onClick={executeScroll}>
            <i className="icon-like" />
            <Number>
              <Text>123</Text>
            </Number>
          </Item>
          <Item to="#" onClick={executeScroll}>
            <i className="icon-bubble" />
            <Number>
              <Text>456</Text>
            </Number>
          </Item>
          <Item to="#" onClick={executeScroll}>
            <i className="icon-share" />
            <Number>
              <Text>789</Text>
            </Number>
          </Item>
        </SlickBar>
      </Container>
      <Row>
        <Col>
          <PostData>
            <PostDataDetail postId={props.match.params.id} />
          </PostData>
        </Col>
        <Col>
          <CommentArea ref={myRef}>
            <Comments className="comments" />
          </CommentArea>
        </Col>
      </Row>
      <OtherView>
        <OtherPosts />
      </OtherView>
    </div>
  );
};

export default PostDetail;
