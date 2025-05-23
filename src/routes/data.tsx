import { lazy } from "react";

const User = lazy(() => import("pages/admin"));
const Default = lazy(() => import("pages/default"));
const NotFound = lazy(() => import("pages/notFound"));
const Student = lazy(() => import("pages/student"));
const Feedback = lazy(() => import("pages/feedback"));
const Problem = lazy(() => import("pages/problem"));
const Resource = lazy(() => import("pages/resource"));
const ProblemCreate = lazy(() => import("pages/problem/update"));
const ProblemUpdate = lazy(() => import("pages/problem/update"));
const Test = lazy(() => import("pages/test"));
const TestUpdate = lazy(() => import("pages/test/update"));

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
    title: "",
    element: <Default />,
  },
  {
    path: "/profile",
    key: "profile",
    title: "Profile",
    element: <User />,
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
    path: "/resources",
    key: "resources",
    title: "Resurslar",
    element: <Resource />,
  },
  {
    path: "/problems",
    key: "problems",
    title: "problems",
    element: <Problem />,
  },
  {
    path: "/problems/create",
    key: "problem-create",
    title: "problem-create",
    element: <ProblemCreate />,
  },
  {
    path: "/problems/update/:id",
    key: "problem-update",
    title: "problem-update",
    element: <ProblemUpdate />,
  },
  {
    path: "/test",
    key: "test",
    title: "Testlar",
    element: <Test />,
  },
  {
    path: "/test/create",
    key: "test-create",
    title: "Test qo'shish",
    element: <TestUpdate />,
  },
  {
    path: "/test/update/:id",
    key: "test-update",
    title: "Testni O'zgartirish",
    element: <TestUpdate />,
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
