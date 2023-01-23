import { RouteObject } from "react-router-dom";
import { Home } from "../pages/Home";
import { SelectAddressInMap } from "../pages/SelectAddressInMap";

export const routesObject: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/select-address-in-map/:id",
    element: <SelectAddressInMap />
  }
]

