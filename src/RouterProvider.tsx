import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";

import RouterContext from "./RouterContext";

type Props = {
  children: React.ReactNode;
  RouterType: HashRouter | BrowserRouter;
};

const RouterProvider = ({ children, RouterType = HashRouter }: Props) => {
  <RouterType>
    <Route>
      {(routeProps: undefined) => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </RouterType>;
};

export default RouterProvider;
