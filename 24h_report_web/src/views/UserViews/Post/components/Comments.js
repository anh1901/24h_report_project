import React from "react";
import styled from "styled-components";
import TitleBreakLine from "../../Home/components/TitleBreakLine";
import { AddComments } from "./AddComments";
import { Comment } from "./Comment";
import { CommentsHeader } from "./CommentsHeader";
import { LikeShareSection } from "./LikeShareSection";
const CommentScrollbar = styled.div`
  overflow: auto;
  height: 55vh;
  scroll-behavior: smooth;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 15px 15px 15px 15px;
`;
export class Comments extends React.Component {
  render() {
    return (
      <div>
        <LikeShareSection />
        <TitleBreakLine />
        <CommentsHeader amountComments={this.props.amountComments} />
        <AddComments />
        <CommentScrollbar>
          <Comment />
          <Comment />
          <Comment />
          
        </CommentScrollbar>
      </div>
    );
  }
}
