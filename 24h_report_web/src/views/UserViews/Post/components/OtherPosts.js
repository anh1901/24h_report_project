import TitleBreakLine from "../../Home/components/TitleBreakLine";
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import postApi from "../../../../api/postApi";
const limit = 25;
export function OtherPosts() {
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
    <div>
      <h3 className="h3">Bài viết liên quan</h3>
      <TitleBreakLine />
      {/* Dummy data */}
      <div className="row mb-2">
        {posts.length > 0 ? (
          posts.map(
            (post) =>
              post.status === "Public" && (
                <div className="col-sm-12 col-md-6 col-lg-3 pt-2 ">
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
                    {post.description.length > limit * 5
                      ? post.description.substring(0, limit * 5 - 1) + "..."
                      : post.description}
                  </p>

                  <br />
                </div>
              )
          )
        ) : (
          <div className="col ml-100">
            <Row className="d-flex justify-content-center">
              <span className="h5 text-primary">Đang tải dữ liệu</span>
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
    </div>
  );
}
