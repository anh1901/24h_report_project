import React from 'react';
export default {
  items: [
    {
      name: "Dashboard",
      url: "dashboard",
      icon: "icon-speedometer",
      
    },
    //
    {
      title: true,
      name: "Người dùng",
      wrapper: {
        element: "",
        attributes: {},
      },
      class: "",
    },
    {
      name: "Quản lý người dùng",
      url: "/users",
      icon: "icon-user",
    },
    //
    {
      title: true,
      name: "Báo cáo",
      wrapper: {
        element: "",
        attributes: {},
      },
      class: "",
    },
    {
      name: "Mới",
      url: "/reports/new",
      icon: "icon-star",
      badge: {
        variant: "success",
        text: <i className="icon-star"/>,
      },
    },
    {
      name: "Đang xử lý",
      url: "/reports/pending",
      icon: "icon-hourglass",
      badge: {
        variant: "warning",
        text: <i className="icon-hourglass"/>,
      },
    },
    {
      name: "Đã xử lý",
      url: "/reports/approved",
      icon: "icon-check",
      badge: {
        variant: "primary",
        text: <i className="icon-check"/>,
      },
    },
    {
      name: "Đã từ chối",
      url: "/reports/denied",
      icon: "icon-ban",
      badge: {
        variant: "danger",
        text: <i className="icon-ban"/>,
      },
    },

    {
      title: true,
      name: "Editor",
      wrapper: {
        element: "",
        attributes: {},
      },
      class: "",
    },
    {
      name: "Công việc của tôi",
      url: "/my-tasks",
      icon: "icon-pencil",
    },
    {
      name: "Tạo bài viết",
      url: "/create-post",
      icon: "icon-pencil",
    },
    {
      name: "Bài viết của tôi",
      url: "/my-posts",
      icon: "icon-pencil",
    },
    {
      title: true,
      name: "Editor Manager",
      wrapper: {
        element: "",
        attributes: {},
      },
      class: "",
    },
    {
      name: "Bài viết chưa đăng",
      url: "/unpublished-posts",
      icon: "icon-pencil",
    },
    {
      name: "Bài viết đã đăng",
      url: "/published-posts",
      icon: "icon-pencil",
    },
    
    {
      name: "Quản lí công việc",
      url: "/tasks-management",
      icon: "icon-pencil",
    },
  ],
};
