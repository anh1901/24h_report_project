import React from "react";
import { Form, FormButton, Image, TextArea } from "semantic-ui-react";
import styled from "styled-components";
const AddComment = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 16px;

  form {
    flex: 1;
  }

  .user-image {
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }
`;
export function AddComments() {
  return (
    <AddComment>
      <Image
        className="user-image"
        src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
        circular
      />
      <Form>
        <Form.TextArea
          control={TextArea}
          autoHeight
          placeholder="Viết bình luận của bạn"
        />
        <FormButton type="submit" style={{ background: "linear-gradient(to right,#56CCF2,#2F80ED)", color: "white"}}>
          Gửi
        </FormButton>
      </Form>
    </AddComment>
  );
}
