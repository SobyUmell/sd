import {
  Profile,
  Info,
  Teka,
  Auth1,
  Auth2,
  Auth3,
  MapPage,
  Login,
  Business,
} from "../pages";
export const privateRoutes = [
  { path: "/", component: <Profile></Profile>, exact: true },
  { path: "/profile", component: <Profile></Profile>, exact: true },
  { path: "/info", component: <Business></Business>, exact: true },
  { path: "/info2", component: <Info></Info>, exact: true },
  { path: "/teka", component: <Teka></Teka>, exact: true },
  { path: "/map", component: <MapPage></MapPage>, exact: true },
];
export const publicRoutes = [
  { path: "/", component: <Login></Login>, exact: true },
  { path: "*", component: <Login></Login>, exact: true },
  { path: "/auth-1", component: <Auth1></Auth1>, exact: true },
  { path: "/auth-2", component: <Auth2></Auth2>, exact: true },
  { path: "/auth-3", component: <Auth3></Auth3>, exact: true },
];
