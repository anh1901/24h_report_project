import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import postApi from "../../../../api/postApi";
import TitleBreakLine from "./TitleBreakLine";
const limit = 25;

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPostList = async () => {
    try {
      const params = { isRecentDate: true };
      const response = await postApi.getAll(params);
      console.log(response);
      setPosts(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPostList();
  }, []);
  return (
    <section className="section-content">
      <div className="featured">
        <div className="row ">
          <div className="col-sm-8 col-md-8 col-lg-8">
            <div class="row">
              <div class="col-6 align-self-center">
                <h2 class="widget-title">Tin hôm nay</h2>
              </div>
              <div class="col-6 text-right align-self-center">
                {" "}
                <a href="/viewAll/TodayPost" className="see_all mb20">
                  <b>Xem tất cả</b>
                </a>
              </div>
            </div>
            <TitleBreakLine />
            <div className="row mb-2">
              {posts.length > 0 ? (
                posts.map(
                  (post) =>
                    post.status === "Public" && (
                      <div className="col-sm-6 col-xl-6 ">
                        <a href={`/postDetail/${post.postId}`}>
                          <img
                            src={
                              post.image.includes("http")
                                ? post.image
                                : "https://kpopnews.atsit.in/vi/wp-content/uploads/2021/10/astros-moonbin-boyfriend-material-pictures.png"
                            }
                            style={{
                              width: "100%",
                              display: "inline-block",
                            }}
                            class="img-responsive"
                            height=" 300rem"
                            className="card-img mb-2"
                          />
                        </a>
                        <a
                          class="p-1 badge badge-primary rounded-0"
                          href={`/postDetail/${post.postId}`}
                        >
                          {post.category.type}
                        </a>
                        <h4>{post.title}</h4>
                        <div class="news-meta">
                          <Row justifyContent="space-between">
                            <Col xs="12" md="12" sm="12" lg="12" xl="9">
                              <span class="news-author">
                                viết bởi{" "}
                                <a
                                  class="text-gray font-weight-bold"
                                  href={`/postDetail/${post.postId}`}
                                >
                                  {post.editor.accountInfo.username}{" "}
                                </a>
                              </span>
                              <span class="news-date">
                                lúc {post.createTime.substring(0, 10)}{" "}
                              </span>
                            </Col>
                            <Col xs="12" md="12" sm="12" lg="12" xl="3">
                              <span>
                                <a
                                  class="text-gray font-weight-bold"
                                  href={`/postDetail/${post.postId}`}
                                >
                                  243
                                </a>{" "}
                                <i className="icon-like"></i>{" "}
                                <a
                                  class="text-gray font-weight-bold"
                                  href={`/postDetail/${post.postId}`}
                                >
                                  343
                                </a>{" "}
                                <i className="icon-bubble"></i>{" "}
                                <a
                                  class="text-gray font-weight-bold"
                                  href={`/postDetail/${post.postId}`}
                                >
                                  53
                                </a>{" "}
                                <i className="icon-share"></i>{" "}
                              </span>
                            </Col>
                          </Row>
                        </div>
                        <br />
                        <p>
                          {post.subTitle.length > limit * 5
                            ? post.subTitle.substring(0, limit * 5 - 1) +
                              "..."
                            : post.subTitle}
                        </p>

                        <br />
                      </div>
                    )
                )
              ) : (
                <div className="col ml-100">
                  <Row className="d-flex justify-content-center mt-5">
                    <span className="h5 text-primary">Không có dữ liệu</span>
                    <div
                      class="spinner-grow spinner-grow-sm text-primary ml-1"
                      role="status"
                    />
                    <div
                      class="spinner-grow spinner-grow-sm text-primary ml-1"
                      role="status"
                    />
                    <div
                      class="spinner-grow spinner-grow-sm text-primary ml-1"
                      role="status"
                    />
                  </Row>
                </div>
              )}
            </div>
            <br />
            <div class="row">
              <div class="col-6 align-self-center">
                <h2 class="widget-title">Tin trong khu vực</h2>
              </div>
              <div class="col-6 text-right align-self-center">
                {" "}
                <a href="#" class="see_all mb20">
                  <b>Xem tất cả</b>
                </a>
              </div>
            </div>
            <TitleBreakLine />
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <img
                  src="https://cdn-imgix.headout.com/tour/28481/TOUR-IMAGE/2bbd5c6c-e3dc-4dc4-b4d5-11c94baad3e3-15133-dubai-combo-img-worlds-of-adventure---free-burj-khalifa-at-the-top-with-coffee-06.JPG"
                  className="card-img"
                />
                <h5>Copa America: Luis Suarez from devastated US</h5>
                <p>
                  The property, complete with 30-seat screening from room, a
                  100-seat amphitheater and a swimming pond with sandy shower…
                </p>
                <button className="btn btn-button">Xem chi tiết</button>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <img
                  src="https://cdn-imgix.headout.com/tour/28481/TOUR-IMAGE/2bbd5c6c-e3dc-4dc4-b4d5-11c94baad3e3-15133-dubai-combo-img-worlds-of-adventure---free-burj-khalifa-at-the-top-with-coffee-06.JPG"
                  className="card-img"
                />
                <h5>Copa America: Luis Suarez from devastated US</h5>
                <p>
                  The property, complete with 30-seat screening from room, a
                  100-seat amphitheater and a swimming pond with sandy shower…
                </p>
                <button className="btn btn-button">Xem chi tiết</button>
              </div>
            </div>
            <br />
            <div className="div-content mt-3 mb-3">Quảng cáo</div>
            <br />
            <div class="row">
              <div class="col-6 align-self-center">
                <h2 class="widget-title">Tin khẩn cấp</h2>
              </div>
              <div class="col-6 text-right align-self-center">
                {" "}
                <a href="#" class="see_all mb20">
                  <b>Xem tất cả</b>
                </a>
              </div>
            </div>
            <TitleBreakLine />
            <div className="row mb-2">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <img
                  src="https://cdn-imgix.headout.com/tour/28481/TOUR-IMAGE/2bbd5c6c-e3dc-4dc4-b4d5-11c94baad3e3-15133-dubai-combo-img-worlds-of-adventure---free-burj-khalifa-at-the-top-with-coffee-06.JPG"
                  className="card-img"
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <h5>Copa America: Luis Suarez from devastated US</h5>
                <p>
                  The property, complete with 30-seat screening from room, a
                  100-seat amphitheater and a swimming pond with sandy shower…
                </p>
                <button className="btn btn-button">Xem chi tiết</button>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <img
                  src="https://cdn-imgix.headout.com/tour/28481/TOUR-IMAGE/2bbd5c6c-e3dc-4dc4-b4d5-11c94baad3e3-15133-dubai-combo-img-worlds-of-adventure---free-burj-khalifa-at-the-top-with-coffee-06.JPG"
                  className="card-img"
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <h5>Copa America: Luis Suarez from devastated US</h5>
                <p>
                  The property, complete with 30-seat screening from room, a
                  100-seat amphitheater and a swimming pond with sandy shower…
                </p>
                <button className="btn btn-button">Xem chi tiết</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div class="row">
              <div class="col-6 align-self-center">
                <h2 class="widget-title">Chia sẻ nhiều</h2>
              </div>
              <div class="col-6 text-right align-self-center">
                {" "}
                <a href="#" class="see_all mb20">
                  <b>Xem tất cả</b>
                </a>
              </div>
            </div>
            <TitleBreakLine />
            {/* Most shared here */}
            <div class="row pb-2">
              <div class="col-xl-3 col-sm-3 ">
                <img
                  src="https://storage.googleapis.com/pik-buk/inspitrip/2019_c29adcbb-8eb4-4a57-810b-5040097dfedf.jpg?w=800"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="col-xl-9 col-sm-9 pl-3">
                <span> Fraud / 23.05.2022</span>
                <h6 class="h6 mt-1">Test title</h6>
              </div>
            </div>
            <div class="row pb-2">
              <div class="col-xl-3 col-sm-3 ">
                <img
                  src="https://storage.googleapis.com/pik-buk/inspitrip/2019_c29adcbb-8eb4-4a57-810b-5040097dfedf.jpg?w=800"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="col-xl-9 col-sm-9 pl-3">
                <span> Fraud / 23.05.2022</span>
                <h6 class="h6 mt-1">Test title</h6>
              </div>
            </div>
            <div class="row pb-2">
              <div class="col-xl-3 col-sm-3 ">
                <img
                  src="https://storage.googleapis.com/pik-buk/inspitrip/2019_a673faf2-4626-4262-8edd-a5fef4689879.jpg?w=800"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="col-xl-9 col-sm-9 pl-3">
                <span> Telephone fraud / 23.05.2022</span>
                <h6 class="h6 mt-1">Test title 2</h6>
              </div>
            </div>
            <div class="row pb-2">
              <div class="col-xl-3 col-sm-3 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="col-xl-9 col-sm-9 pl-3">
                <span> Accident / 23.05.2022</span>
                <h6 class="h6 mt-1">Test title 3</h6>
              </div>
            </div>
            <div class="row pb-2">
              <div class="col-xl-3 col-sm-3 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrulB6fJD8ypW94qO4gfj-qqxPtTjDznsZA&usqp=CAU"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="col-xl-9 col-sm-9 pl-3">
                <span> Thief / 23.05.2022</span>
                <h6 class="h6 mt-1">Test title 4</h6>
              </div>
            </div>
            <div class="row pb-2">
              <div class="col-xl-3 col-sm-3 ">
                <img
                  src="https://storage.googleapis.com/pik-buk/inspitrip/2019_c29adcbb-8eb4-4a57-810b-5040097dfedf.jpg?w=800"
                  width="100%"
                  height="100%"
                />
              </div>
              <div class="col-xl-9 col-sm-9 pl-3">
                <span> Fraud / 23.05.2022</span>
                <h6 class="h6 mt-1">Test title</h6>
              </div>
            </div>
            {/* Tin khác */}
            <br />
            <div>
              <div class="row">
                <div class="col-6 align-self-center">
                  <h2 class="widget-title">Tin thể thao</h2>
                </div>
                <div class="col-6 text-right align-self-center">
                  {" "}
                  <a href="#" class="see_all mb20">
                    <b>Xem tất cả</b>
                  </a>
                </div>
              </div>
              <TitleBreakLine />
              <div className=".hero-bsns-content col-size">
                <div className="row">
                  <div className="col">
                    <img
                      src="https://cdn-imgix.headout.com/tour/28481/TOUR-IMAGE/2bbd5c6c-e3dc-4dc4-b4d5-11c94baad3e3-15133-dubai-combo-img-worlds-of-adventure---free-burj-khalifa-at-the-top-with-coffee-06.JPG"
                      width="100"
                      height="80"
                    />
                  </div>
                  <div className="col">
                    <span>Technology / 23.07.2021</span>
                    <h6 className="h6 mt-1"></h6>
                  </div>
                </div>
              </div>
              <div className=".hero-bsns-content col-size">
                <div className="row">
                  <div className="col">
                    <img
                      src="https://quomodosoft.com/html/newsprk/assets/img/flag/match4.png"
                      width="100"
                      height="80"
                    />
                  </div>
                  <div className="col">
                    <span>Tommorow / 23.07.2021</span>
                    <h6 className="h6 mt-1">Germany VS France</h6>
                  </div>
                </div>
              </div>
              <div className=".hero-bsns-content col-size">
                <div className="row">
                  <div className="col">
                    <img
                      src="https://cdn-imgix.headout.com/tour/28481/TOUR-IMAGE/2bbd5c6c-e3dc-4dc4-b4d5-11c94baad3e3-15133-dubai-combo-img-worlds-of-adventure---free-burj-khalifa-at-the-top-with-coffee-06.JPG"
                      width="100"
                      height="80"
                    />
                  </div>
                  <div className="col">
                    <span>Tommorow / 23.07.2021</span>
                    <h6 className="h6 mt-1">Germany VS France</h6>
                  </div>
                </div>
              </div>
              <div className=".hero-bsns-content col-size">
                <div className="row">
                  <div className="col">
                    <img
                      src="https://quomodosoft.com/html/newsprk/assets/img/flag/match1.png"
                      width="100"
                      height="80"
                    />
                  </div>
                  <div className="col">
                    <span>Tommorow / 23.07.2021</span>
                    <h6 className="h6 mt-1">Germany VS France</h6>
                  </div>
                </div>
              </div>
              <div className=".hero-bsns-content col-size">
                <div className="row">
                  <div className="col">
                    <img
                      src="https://quomodosoft.com/html/newsprk/assets/img/flag/match3.png"
                      width="100"
                      height="80"
                    />
                  </div>
                  <div className="col">
                    <span>Tommorow / 23.07.2021</span>
                    <h6 className="h6 mt-1">Germany VS France</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* **************************************  */}
          </div>
        </div>
      </div>
    </section>
  );
}
