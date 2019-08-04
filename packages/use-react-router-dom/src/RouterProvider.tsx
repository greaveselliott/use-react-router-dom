import React, { FC } from "react";
import { HashRouter, Route } from "react-router-dom";

import RouterContext from "./RouterContext";

type Props = {
  children: React.ReactNode;
  RouterType: HashRouter;
};

const RouterProvider: FC<Props> = ({ children }) => (
  <HashRouter>
    <Route
      render={props => (
        <RouterContext.Provider value={props}>
          {children}
        </RouterContext.Provider>
      )}
    />
  </HashRouter>
);

export default RouterProvider;
