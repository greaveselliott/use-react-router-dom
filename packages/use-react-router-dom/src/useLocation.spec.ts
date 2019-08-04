import useLocation from "./useLocation";

jest.mock("./useRouter", () => () => ({
  location: "https://www.abc.com/"
}));

test("Return location from router context", () => {
  expect(useLocation()).toEqual("https://www.abc.com/");
});
