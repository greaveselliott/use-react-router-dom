import useParams from "./useRouter";

jest.mock("./useRouter", () => () => ({
  match: "https://www.abc.com/"
}));

test("Return matched URL from React Router context.", () => {
  expect(useParams()).toEqual({ match: "https://www.abc.com/" });
});
