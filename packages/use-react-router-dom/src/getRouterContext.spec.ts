import { __RouterContext } from "react-router";
import getRouterContext from "./getRouterContext";

jest.mock("react-router", () => ({
  __RouterContext: undefined
}));

test("Throw an error if this method is not called within a <Router /> context.", () => {
  expect(() => getRouterContext()).toThrowErrorMatchingSnapshot();
});
