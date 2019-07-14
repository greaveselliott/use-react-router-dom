import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
declare type Props = {
    children: React.ReactNode;
    InjectedRouter: new () => BrowserRouter | HashRouter;
};
declare const RouterProvider: ({ children, InjectedRouter }: Props) => JSX.Element;
export default RouterProvider;
