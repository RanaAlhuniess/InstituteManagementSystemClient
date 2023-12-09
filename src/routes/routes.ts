import Layout from "../layouts/layout";
import { RouterModel } from "../models/router.model";
import LoginPage from "../Pages/auth/login";
import RegisterPage from "../Pages/auth/register";
import DashboardPage from "../Pages/dashboard";
import SessionBookingPage from "../Pages/session-booking";
export const PUBLIC_ROUTES: RouterModel[] = [
  {
    path: "/login",
    title: "Login",
    element: LoginPage,
  },
  {
    path: "/register",
    title: "Register",
    element: RegisterPage,
  },
  {
    path: "",
    element: Layout,
    children: [
      {
        path: "",
        title: "Dashboard",
        element: DashboardPage,
      },
      {
        path: "/booking",
        title: "Session Booking",
        element: SessionBookingPage
      },
    ],
  },
];
