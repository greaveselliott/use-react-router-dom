import { useContext, useEffect } from "react";
import { StaticContext } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { LocationState } from "history";
import useForceUpdate from "use-force-update";

import RouterContext from "./RouterContext";

const useRouter = <
  Param extends { [Key in keyof Param]?: string } = {},
  Context extends StaticContext = StaticContext,
  State = LocationState
>(): RouteComponentProps<Param, Context, State> => {
  if (useContext === undefined) {
    throw new Error("React >= 16.7 required");
  }

  const forceUpdate: VoidFunction = useForceUpdate();

  const routerContext = useContext<RouteComponentProps>(
    RouterContext
  ) as RouteComponentProps<Param, Context, State>;

  if (!routerContext) {
    throw new Error(
      "useReactRouter may only be called within a <Router /> context."
    );
  }

  useEffect((): VoidFunction => routerContext.history.listen(forceUpdate), [
    routerContext
  ]);

  return routerContext;
};

export default useRouter;
