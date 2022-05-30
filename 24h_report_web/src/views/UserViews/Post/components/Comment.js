import React from "react";
import { Button, Image } from "semantic-ui-react";
import styled from "styled-components";
const CommentSection = styled.div`
  display: flex;
  margin: 8px 0;

  .user-image {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    flex-shrink: 0;
  }

  .user-name {
    font-weight: 600;
    margin-bottom: 4px;
    display: inline;
  }
  .date {
    display: inline;
    color: grey;
  }
  .comment-actions {
    margin-top: 4px;
    button {
      margin-left: 8px;
    }
  }
  .comment {
    display: block;
  }
`;
export function Comment(props) {
  return (
    <CommentSection>
      <Image
        className="user-image"
        src="https://img5.thuthuatphanmem.vn/uploads/2022/01/14/anh-dai-dien-buon-ngau_023706184.jpg"
        circular
      />
      <div>
        <div className="comment-actions">
          <div className="user-name">Người dùng cute</div>{" "}
          <div className="date">- 1 ngày trước</div>
          <div className="comment">Kinh đấy</div>
        </div>
      </div>
    </CommentSection>
  );
}
