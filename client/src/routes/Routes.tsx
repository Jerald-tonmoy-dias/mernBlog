import React from "react";
import { useRoutes,Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import BlogSinglePage from "../pages/BlogSinglePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import Layout from "../layouts/Layout";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout>
        <Outlet/>
      </Layout>,
      children: [
        {
          index: true,
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/blog",
          element: <BlogPage />,
        },
        {
          path: "/blog/:slug",
          element: <BlogSinglePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);
}
