import {
  Home,
  Register,
  Login,
  Site,
  AboutMe,
  Restaurants,
  RestaurantSite,
  SiteProfile
} from "../pages/index";

export const routes = {
  root: [
    {
      path: "/inmuebles",
      component: Home,
    },
    {
      path: "/restaurants",
      component: Restaurants,
    },
    {
      path: "/about-me",
      component: AboutMe,
    },
    {
      path: "/inmuebles/:id",
      component: Site,
    },
    {
      path: "/restaurants/:id",
      component: RestaurantSite,
    },
    {
      path: "/profile/site/:id",
      component: SiteProfile
    },
    {
      path: "",
      component: () => <h1>Error 404</h1>,
    },
  ],
  notRegister: [
    {
      path: "/inmuebles",
      component: Home,
    },
    {
      path: "/restaurants",
      component: Restaurants,
    },
    {
      path: "/about-me",
      component: AboutMe,
    },
    {
      path: "/inmuebles/:id",
      component: Site,
    },
    {
      path: "/restaurants/:id",
      component: RestaurantSite,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "",
      component: () => <h1>Error 404</h1>,
    },
  ],
};
