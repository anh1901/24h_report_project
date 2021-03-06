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
const NewReports = Loadable({
  loader: () => import("./views/AdminViews/Reports/NewReports"),
  loading: Loading,
});
const PendingReports = Loadable({
  loader: () => import("./views/AdminViews/Reports/PendingReports"),
  loading: Loading,
});
const ApprovedReports = Loadable({
  loader: () => import("./views/AdminViews/Reports/ApprovedReports"),
  loading: Loading,
});
const DeniedReports = Loadable({
  loader: () => import("./views/AdminViews/Reports/DeniedReports"),
  loading: Loading,
});
const Posts = Loadable({
  loader: () => import("./views/AdminViews/Posts/MyPosts"),
  loading: Loading,
});
const MyPosts = Loadable({
  loader: () => import("./views/AdminViews/Posts/MyPosts"),
  loading: Loading,
});
const PublishedPosts = Loadable({
  loader: () => import("./views/AdminViews/Posts/PublishedPosts"),
  loading: Loading,
});
const UnPublishedPosts = Loadable({
  loader: () => import("./views/AdminViews/Posts/UnPublishedPosts"),
  loading: Loading,
});
const CreatePost = Loadable({
  loader: () => import("./views/AdminViews/Posts/CreatePost"),
  loading: Loading,
});
const PostDetail = Loadable({
  loader: () => import("./views/UserViews/Post/PostDetail"),
  loading: Loading,
});
const routes = [
  { path: "/", name: "24h Report", component: UserLayout, exact: true },
  { path: "/home", name: "Trang ch???", component: Home },
  {
    path: "/sendReport",
    name: "G???i b??o c??o",
    component: SendReport,
  },
  {
    path: "/viewReport",
    name: "Xem ph???n h???i",
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
    path: "/reports/new",
    name: "Reports",
    role: ["Admin", "Editor", "Editor Manager"],
    component: NewReports,
  },
  {
    path: "/reports/pending",
    name: "Reports",
    role: ["Admin", "Editor", "Editor Manager"],
    component: PendingReports,
  },
  {
    path: "/reports/approved",
    name: "Reports",
    role: ["Admin", "Editor", "Editor Manager"],
    component: ApprovedReports,
  },
  {
    path: "/reports/denied",
    name: "Reports",
    role: ["Admin", "Editor", "Editor Manager"],
    component: DeniedReports,
  },
  {
    path: "/my-posts",
    name: "My Posts",
    role: ["Admin", "Editor", "Editor Manager"],
    component: MyPosts,
  },
  {
    path: "/published-posts",
    name: "Published posts",
    role: ["Admin", "Editor", "Editor Manager"],
    component: PublishedPosts,
  },
  {
    path: "/unpublished-posts",
    name: "Unpublished Posts",
    role: ["Admin", "Editor", "Editor Manager"],
    component: UnPublishedPosts,
  },
  {
    path: "/create-post",
    name: "Create Post",
    role: ["Admin", "Editor", "Editor Manager"],
    component: CreatePost,
  },
  {
    path: "/my-tasks",
    name: "My Tasks",
    role: ["Admin", "Editor", "Editor Manager"],
    component: Posts,
  },
  {
    path: "/task-management",
    name: "Task management",
    role: ["Admin", "Editor", "Editor Manager"],
    component: Posts,
  },
  { path: "/postDetail/:id", name: "Post Detail", component: PostDetail },
];
export default routes;
