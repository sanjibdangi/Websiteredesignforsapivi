import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { NewHome } from "./pages/NewHome";
import { NewAbout } from "./pages/NewAbout";
import { NewServices } from "./pages/NewServices";
import { NewPortfolio } from "./pages/NewPortfolio";
import { NewContact } from "./pages/NewContact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: NewHome },
      { path: "about", Component: NewAbout },
      { path: "services", Component: NewServices },
      { path: "portfolio", Component: NewPortfolio },
      { path: "contact", Component: NewContact },
    ],
  },
]);