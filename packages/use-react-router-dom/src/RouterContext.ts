import { __RouterContext } from "react-router";

if (!__RouterContext) {
  throw new Error(
    "useReactRouter may only be called within a <Router /> context."
  );
}

export default __RouterContext;
