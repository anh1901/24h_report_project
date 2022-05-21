import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/featuredPosts.css";
import { Col, Row } from "reactstrap";
class FeaturedPosts extends Component {
  render() {
    return (
      <div className="featured">
        <div style={{ textAlign: "left" }}>
          <h4>Tin mới nhất</h4>
          <hr
            style={{
              height: 1,
              borderColor: "#0000FF",
            }}
          />
          <div className="maincontainer">
            <div class="row">
              <div class="col-12 pb-5">
                <section class="row">
                  <div class="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                    <div
                      id="featured"
                      class="carousel slide carousel"
                      data-ride="carousel"
                    >
                      <ol class="carousel-indicators top-indicator">
                        <li
                          data-target="#featured"
                          data-slide-to="0"
                          class="active"
                        ></li>
                        <li data-target="#featured" data-slide-to="1"></li>
                        <li data-target="#featured" data-slide-to="2"></li>
                        <li data-target="#featured" data-slide-to="3"></li>
                      </ol>

                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div class="card border-0 rounded-0 text-light overflow zoom">
                            <div class="position-relative">
                              <div class="ratio_left-cover-1 image-wrapper ">
                                <a href="#">
                                  <img
                                    class="img-responsive"
                                    height="450rem"
                                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                    alt="Bootstrap news template"
                                  />
                                </a>
                              </div>
                              <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                <a href="#">
                                  <h2 class="h3 post-title text-white my-1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </h2>
                                </a>

                                <div class="news-meta">
                                  <Row>
                                    <Col xs="12" sm="9" lg="9">
                                      <span class="news-author">
                                        by{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          Anh{" "}
                                        </a>
                                      </span>
                                      <span class="news-date">
                                        Oct 22, 2019{" "}
                                      </span>
                                    </Col>
                                    <Col xs="12" sm="3" lg="3">
                                      <span>
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          243
                                        </a>{" "}
                                        <i className="icon-like"></i>{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          343
                                        </a>{" "}
                                        <i className="icon-bubble"></i>{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          53
                                        </a>{" "}
                                        <i className="icon-share"></i>{" "}
                                      </span>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="carousel-item">
                          <div class="card border-0 rounded-0 text-light overflow zoom">
                            <div class="position-relative">
                              <div class="ratio_left-cover-1 image-wrapper ">
                                <a href="#">
                                  <img
                                    class="img-responsive"
                                    height="450rem"
                                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                                    alt="Bootstrap news theme"
                                  />
                                </a>
                              </div>
                              <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                <a href="#">
                                  <h2 class="h3 post-title text-white my-1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </h2>
                                </a>

                                <div class="news-meta">
                                  <Row>
                                    <Col xs="12" sm="9" lg="9">
                                      <span class="news-author">
                                        by{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          Anh{" "}
                                        </a>
                                      </span>
                                      <span class="news-date">
                                        Oct 22, 2019{" "}
                                      </span>
                                    </Col>
                                    <Col xs="12" sm="3" lg="3">
                                      <span>
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          243
                                        </a>{" "}
                                        <i className="icon-like"></i>{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          343
                                        </a>{" "}
                                        <i className="icon-bubble"></i>{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          53
                                        </a>{" "}
                                        <i className="icon-share"></i>{" "}
                                      </span>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <div class="card border-0 rounded-0 text-light overflow zoom">
                            <div class="position-relative">
                              <div class="ratio_left-cover-1 image-wrapper">
                                <a href="#">
                                  <img
                                    class="img-responsive"
                                    height="450rem"
                                    src="https://images.ctfassets.net/23aumh6u8s0i/4JKsesGb6RuQLsjVnUmB0j/0bcbb36344547e9ab698b9077f80170a/16_brightness"
                                    alt="Bootstrap blog template"
                                  />
                                </a>
                              </div>
                              <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                <a href="#">
                                  <h2 class="h3 post-title text-white my-1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </h2>
                                </a>

                                <div class="news-meta">
                                  <Row>
                                    <Col xs="12" sm="9" lg="9">
                                      <span class="news-author">
                                        by{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          Anh{" "}
                                        </a>
                                      </span>
                                      <span class="news-date">
                                        Oct 22, 2019{" "}
                                      </span>
                                    </Col>
                                    <Col xs="12" sm="3" lg="3">
                                      <span>
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          243
                                        </a>{" "}
                                        <i className="icon-like"></i>{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          343
                                        </a>{" "}
                                        <i className="icon-bubble"></i>{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          53
                                        </a>{" "}
                                        <i className="icon-share"></i>{" "}
                                      </span>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="carousel-item">
                          <div class="card border-0 rounded-0 text-light overflow zoom">
                            <div class="position-relative">
                              <div class="ratio_left-cover-1 image-wrapper">
                                <a href="#">
                                  <img
                                    class="img-responsive "
                                    height="450rem"
                                    src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"
                                    alt="Bootstrap portal template"
                                  />
                                </a>
                              </div>
                              <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                <a href="#">
                                  <h2 class="h3 post-title text-white my-1">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                  </h2>
                                </a>

                                <div class="news-meta">
                                  <Row>
                                    <Col xs="12" sm="9" lg="9">
                                      <span class="news-author">
                                        by{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          Anh{" "}
                                        </a>
                                      </span>
                                      <span class="news-date">
                                        Oct 22, 2019{" "}
                                      </span>
                                    </Col>
                                    <Col xs="12" sm="3" lg="3">
                                      <span>
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          243
                                        </a>{" "}
                                        <i className="icon-like"></i>{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          343
                                        </a>{" "}
                                        <i className="icon-bubble"></i>{" "}
                                        <a
                                          class="text-white font-weight-bold"
                                          href="#"
                                        >
                                          53
                                        </a>{" "}
                                        <i className="icon-share"></i>{" "}
                                      </span>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      class="carousel-control-prev"
                      href="#featured"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#featured"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>

                  <div class="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                    <div class="row">
                      <div class="col-6 pb-1 pt-0 pr-1">
                        <div class="card border-0 rounded-0 text-white overflow zoom">
                          <div class="position-relative">
                            <div class="ratio_right-cover-2 image-wrapper">
                              <a href="#">
                                <img
                                  class="img-responsive"
                                  height="221rem"
                                  src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                                  alt="simple blog template bootstrap"
                                />
                              </a>
                            </div>
                            <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                              <a
                                class="p-1 badge badge-primary rounded-0"
                                href="#"
                              >
                                Bitcoin
                              </a>

                              <a href="#">
                                <h2 class="h5 text-white my-1">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </h2>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-6 pb-1 pl-1 pt-0">
                        <div class="card border-0 rounded-0 text-white overflow zoom">
                          <div class="position-relative">
                            <div class="ratio_right-cover-2 image-wrapper">
                              <a href="#">
                                <img
                                  class="img-responsive"
                                  height="221rem"
                                  src="https://images.ctfassets.net/23aumh6u8s0i/4JKsesGb6RuQLsjVnUmB0j/0bcbb36344547e9ab698b9077f80170a/16_brightness"
                                  alt="bootstrap templates for blog"
                                />
                              </a>
                            </div>
                            <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                              <a
                                class="p-1 badge badge-primary rounded-0"
                                href="#"
                              >
                                Pi Network
                              </a>

                              <a href="#">
                                <h2 class="h5 text-white my-1">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </h2>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-6 pb-1 pr-1 pt-1">
                        <div class="card border-0 rounded-0 text-white overflow zoom">
                          <div class="position-relative">
                            <div class="ratio_right-cover-2 image-wrapper">
                              <a href="#">
                                <img
                                  class="img-responsive"
                                  height="221rem"
                                  src="https://www.w3schools.com/css/img_5terre_wide.jpg"
                                  alt="bootstrap blog wordpress theme"
                                />
                              </a>
                            </div>
                            <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                              <a
                                class="p-1 badge badge-primary rounded-0"
                                href="#"
                              >
                                Banking
                              </a>

                              <a href="#">
                                <h2 class="h5 text-white my-1">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </h2>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-6 pb-1 pl-1 pt-1">
                        <div class="card border-0 rounded-0 text-white overflow zoom">
                          <div class="position-relative">
                            <div class="ratio_right-cover-2 image-wrapper">
                              <a href="#">
                                <img
                                  class="img-responsive"
                                  height="221rem"
                                  src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"
                                  alt="blog website templates bootstrap"
                                />
                              </a>
                            </div>
                            <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                              <a
                                class="p-1 badge badge-primary rounded-0"
                                href="#"
                              >
                                Fraud
                              </a>

                              <a href="#">
                                <h2 class="h5 text-white my-1">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </h2>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FeaturedPosts;
