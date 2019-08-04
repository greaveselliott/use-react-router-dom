import React, { FC } from "react";
import { HashRouter } from "react-router-dom";
import { parse, ParsedQuery } from "query-string";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { useQuery, useNavigate } from ".";

test("Return query parameters as an object", () => {
  let query: any;
  let navigate: ({ search }: { search: string | number }) => void;

  const MockComponent: FC = () => {
    const { visit } = useNavigate("/abc?search=123");
    navigate = visit;
    query = useQuery();
    return <h1>Test</h1>;
  };

  render(
    <HashRouter>
      <MockComponent />
    </HashRouter>
  );
  navigate({ search: 123 });

  expect(query).toEqual({ search: "123" });
});
