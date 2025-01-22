import { lazy } from "react";

const User = lazy(() => import("pages/admin"));
const Default = lazy(() => import("pages/default"));
const NotFound = lazy(() => import("pages/notFound"));
const Student = lazy(() => import("pages/student"));
const Problem = lazy(() => import("pages/problem"));
const Feedback = lazy(() => import("pages/feedback"));

export interface IRoute {
  path: string;
  key?: string | "*";
  element: JSX.Element;
  inner?: IRoute[];
  index?: boolean;
  title: string;
}

const privateRoutes: IRoute[] = [
  {
    path: "/",
    key: "welcome",
    title: "Welcome",
    element: <Default />,
  },
  {
    path: "/profile",
    key: "profile",
    title: "Profile",
    element: <User />,
  },
  {
    path: "/problems",
    key: "problems",
    title: "Masalalar",
    element: <Problem />,
  },
  {
    path: "/students",
    key: "students",
    title: "Students",
    element: <Student />,
  },
  {
    path: "/feedbacks",
    key: "feedbacks",
    title: "Feedbacks",
    element: <Feedback />,
  },
  {
    path: "*",
    key: "*",
    title: "",
    element: <NotFound />,
  },
];

const publicRoutes: IRoute[] = [
  // {
  //   path: "/login",
  //   access: [],
  //   title: "Login",
  //   element: <Login />,
  // },
];

export { privateRoutes, publicRoutes };
