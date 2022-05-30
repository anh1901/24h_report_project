import React from "react";
import Loadable from "react-loadable";
import { Row } from "reactstrap";
import { AdminLayout, UserLayout } from "./containers";

function Loading() {
  return (
    <Row className="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </Row>
  );
}
const Home = Loadable({
  loader: () => import("./views/UserViews/Home"),
  loading: Loading,
});
const SendReport = Loadable({
  loader: () => import("./views/UserViews/SendReport"),
  loading: Loading,
});
const ViewReport = Loadable({
  loader: () => import("./views/UserViews/ViewReport"),
  loading: Loading,
});
const FAQ = Loadable({
  loader: () => import("./views/UserViews/FAQ"),
  loading: Loading,
});
// Admin
const Dashboard = Loadable({
  loader: () => import("./views/AdminViews/Dashboard"),
  loading: Loading,
});
const Users = Loadable({
  loader: () => import("./views/AdminViews/Users"),
  loading: Loading,
});
const Reports = Loadable({
  loader: () => import("./views/AdminViews/Reports"),
  loading: Loading,
});
const Posts = Loadable({
  loader: () => import("./views/AdminViews/Posts"),
  loading: Loading,
});
const PostDetail = Loadable({
  loader: () => import("./views/UserViews/Post/PostDetail"),
  loading: Loading,
});
const routes = [
  { path: "/", name: "24h Report", component: UserLayout, exact: true },
  { path: "/home", name: "Trang chủ", component: Home },
  {
    path: "/sendReport",
    name: "Gửi báo cáo",
    component: SendReport,
  },
  {
    path: "/viewReport",
    name: "Xem phản hồi",
    role: ["User"],
    component: ViewReport,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminLayout,
    exact: true,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    role: ["Admin", "Editor", "Editor Manager"],
    component: Dashboard,
  },
  {
    path: "/users",
    name: "Users",
    role: ["Admin", "Editor", "Editor Manager"],
    component: Users,
  },
  {
    path: "/reports",
    name: "Reports",
    role: ["Admin", "Editor", "Editor Manager"],
    component: Reports,
  },
  {
    path: "/posts",
    name: "Posts",
    role: ["Admin", "Editor", "Editor Manager"],
    component: Posts,
  },
  { path: "/postDetail/:id", name: "Post Detail", component: PostDetail },
];
export default routes;
