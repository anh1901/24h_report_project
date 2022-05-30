import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/featuredPosts.css";
import SideTab from "./SideTab";
import PostList from "./PostList";
import TitleBreakLine from "./TitleBreakLine";
import postApi from "../../../../api/postApi";
import PostCarousel from "./PostCarousel";
import LastestPost from "./LastestPost";

export default function FeaturedPosts() {
  const [posts, setPosts] = useState([]);

  const fetchPostList = async () => {
    try {
      const params = { isViewCount: true };
      const response = await postApi.getAll(params);
      console.log(response);
      setPosts(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPostList();
  }, []);
  return (
    <div className="featured">
      <div style={{ textAlign: "left" }}>
        <div class="row">
          <div class="col-sm-9 col-xl-9 col-sm-12 pb-5">
            <h4>Tin mới nhất</h4>
            <TitleBreakLine />
            <div className="maincontainer">
              <div class="row">
                <div class="col-12">
                  <section class="row">
                    <div
                      class="col-sm-12 col-xl-3 pt-2 pr-md-1 mb-3 mb-lg-2 d-lg-down-none d-md-down-none "
                      style={{
                        overflow: "auto",
                        height: "45rem",
                        scrollBehavior: "smooth",
                      }}
                    >
                      <LastestPost />
                    </div>

                    <div class="col-sm-12 col-xl-9 pb-0 pb-md-3 pt-2 pr-md-1">
                      <PostCarousel />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-xl-3">
            <SideTab />
          </div>
        </div>
        <PostList />
      </div>
    </div>
  );
}
