import React, { FC } from "react";
import { HashRouter } from "react-router-dom";
import { Location } from "history";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { useNavigate, useLocation } from ".";

test("Call useNavigate to configure URL template, then call the hook to populate the template.", () => {
  let location: Location | undefined;
  let navigate: ({ param }: { param: string | number }) => void;

  const MockComponent: FC = () => {
    const { visit } = useNavigate("/abc/{param}");
    location = useLocation();
    navigate = visit;

    return <h1>Test</h1>;
  };

  render(
    <HashRouter>
      <MockComponent />
    </HashRouter>
  );

  navigate({ param: undefined });
  expect(location.pathname).toEqual("/abc/");

  navigate({ param: 123 });
  expect(location.pathname).toEqual("/abc/123");
});
