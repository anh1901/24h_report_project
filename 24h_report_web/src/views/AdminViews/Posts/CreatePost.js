import { CFormTextarea } from "@coreui/react-pro";
import React, { useState } from "react";
import {  Col, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import { Card, CardBody, CardTitle, FormGroup, Input, Label } from "reactstrap";
import { Select } from "semantic-ui-react";

const CreatePost =()=> {
  const [text, setText] = useState("Nội dung");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ["clean"], 
      ["link"],
      ["image"],
      ["video"],// remove formatting button
    ],
  };
  const handleEditor=(editor)=>{
    console.log('background', editor);
    setText(editor);
  }
  return (
    <div className="animated fadeIn pl-3 pr-3 pt-2">
        <Row className="ml-2 mr-2">
            <Col md={7}>
              <Card className="mt-1 ml-1 mr-1 pt-1 pr-1 pl-1 pb-1" style={{ height: "55rem" }}>
                <CardTitle className="ml-3 pt-2 mt-3 pr-1 pl-1">
                  <b>Nội dung bài viết</b>
                </CardTitle>
                <CardBody>
                  <FormGroup>
                    <ReactQuill
                      value={text}
                      onChange={handleEditor}
                      modules={modules}
                      style={{
                        height: "43rem",
                        marginBottom:
                          window.innerWidth < 505
                            ? "7rem"
                            : 505 < window.innerWidth && window.innerWidth < 650
                            ? "6rem"
                            : 650 < window.innerWidth && window.innerWidth < 1250
                            ? "4rem"
                            : "2rem",
                      }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col md={5}>
              <Card className="mt-1 ml-1 mr-1 pt-1 pr-1 pl-1 pb-1" style={{ height: "20rem" }}>
                <CardTitle className="ml-3 pt-2 mt-3 pr-1 pl-1">Thông tin bài viết</CardTitle>
                <CardBody>
                <FormGroup row>
                  <Col md="2">
                    <Label>Tiêu đề:</Label>
                  </Col>
                    <Col md="10">
                        <Input
                          className="input-lg col-md-12"
                          type="text"
                          id="title"
                          value={title}
                          onChange={setTitle}
                          placeholder="Tiêu đề bài viết..."
                        />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Col md="2">
                    <Label>Tóm tắt:</Label>
                  </Col>
                    <Col md="10">
                        <CFormTextarea
                          rows="3"
                          className="input-lg col-md-12"
                          type="text"
                          id="subTitle"
                          value={title}
                          onChange={setSubTitle}
                          placeholder="Tóm tắt bài viết..."
                        />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                  <Col md="2">
                    <Label>Thể loại:</Label>
                  </Col>
                    <Col md="10">
                      <Select
                        className="col-md-12"
                        name="categoryId"
                        isDisabled={["email", "Internet"].length === 0}
                        options={[{label:"email"},{label: "Internet"}]}
                        onChange={() => {}}
                        placeholder="Chọn thể loại"
                        defaultValue={{label:"email"}}
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
              </Card>


            
            </Col>
        </Row>
        <Row className="float-right mr-5 mb-5">
          Button
        </Row>
    </div>
  );
}

export default CreatePost;