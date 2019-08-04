import { __RouterContext } from "react-router";

const getRouterContext = () => {
  if (!__RouterContext) {
    throw new Error(
      "useReactRouter may only be called within a <Router /> context."
    );
  }

  return __RouterContext;
};

export default getRouterContext;
