import React, { FC } from "react";
import { HashRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { useRouter } from ".";

test("Calling useRouter to provides access to the routerContext.", () => {
  let routerContext: RouteComponentProps;

  const MockComponent: FC = () => {
    routerContext = useRouter();

    return <h1>Test</h1>;
  };

  render(
    <HashRouter>
      <MockComponent />
    </HashRouter>
  );

  expect(routerContext).toMatchSnapshot();
});
