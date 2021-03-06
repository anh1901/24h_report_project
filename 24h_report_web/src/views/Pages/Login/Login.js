import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { useFormik } from "formik";

import loginApi from "../../../api/loginApi";

const Login = (props) => {
  const { history } = props;
  const [message, setMessage] = useState("");
  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Param: ", values);
      user_login(values);
    },
  });
  async function user_login(values) {
    try {
      const json = JSON.stringify({
        email: values.email,
        password: values.password,
      });
      const response = await loginApi.getAll(json);
      console.log("Response", response);

      if (!JSON.stringify(response).includes("error")) {
        localStorage.setItem("user_info", JSON.stringify(response));
        if (response.roleId === 1) {
          history.push("/");
        } else {
          history.push("/admin");
        }
      } else {
        alert(response.message);
        setMessage(response.data.message);
      }
    } catch (e) {
      alert(e.message);
    }
  }

  useEffect(() => {
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    if (user_info !== null) {
      if (user_info.roleId === 1) {
        history.push("/");
        window.location.reload();
      } else {
        history.push("/admin");
        window.location.reload();
      }
    }
  }, []);

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <a href="/">
                  <icon className="fa fa-angle-left" />
                  &nbsp;Trang ch???
                </a>
                {/* login */}
                <Form onSubmit={formik.handleSubmit}>
                  <CardBody>
                    <h1>????ng nh???p</h1>
                    <p className="text-muted">
                      ????ng nh???p v??o t??i kho???n c???a b???n
                    </p>
                    <p className="text-danger">{message}</p>
                    <p className="text-warning field_validate_label">
                      {formik.errors.email ? formik.errors.email : null}
                    </p>
                    {/* Email */}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        autoComplete="username"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="M???t kh???u"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    <Row>
                      {/* T???o loading button */}
                      <Col xs="6">
                        <Button type="submit" color="primary" className="px-4">
                          ????ng nh???p
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">
                          Qu??n m???t kh???u
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Form>
              </Card>
              {/* Register */}
              <Card
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: 44 + "%" }}
              >
                <CardBody className="text-center">
                  <div>
                    <h2>????ng k?? ngay</h2>
                    <p>
                      Tham gia ngay ????? ???????c th??ng b??o v??? c??c v??? l???a ?????o tinh vi
                      nh???t. B??o c??o nh???ng tr?????ng h???p xung quanh b???n cho ch??ng
                      t??i ????? gi??p x?? h???i t???t ?????p h??n.
                    </p>
                    <Button
                      color="primary"
                      className="mt-3"
                      active
                      onClick={() => (window.location.href = "/register")}
                    >
                      Register Now!
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
