
import React from "react";
import { Redirect } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home/index"));
const Anime = React.lazy(() => import("../pages/Anime/index"));

const RedirectComponent = () => <Redirect to="/"></Redirect>

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/anime",
    component: Anime,
    exact: true
  },
  {
    path: "*",
    component: RedirectComponent
  },
];

export default routes;