import useParams from "./useParams";

jest.mock("./useRouter", () => () => ({
  match: {
    params: {
      a: 1,
      b: 2,
      c: 3
    }
  }
}));

test("Return matched URL from React Router context.", () => {
  expect(useParams()).toEqual({
    a: 1,
    b: 2,
    c: 3
  });
});
