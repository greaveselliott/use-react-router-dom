import { useMemo, useCallback } from "react";
import { useRouter } from "./";
import uriTemplates, { URITemplate } from "uri-templates";

const useNavigate = <T>(
  to: string | URITemplate,
  options: UpdateQueryOptions = { replace: false }
): Visit<T> => {
  const { history } = useRouter();
  const { replace } = options;

  const template = typeof to === "string" ? uriTemplates(to) : to;

  const visit = useCallback(
    (params: T): void => {
      const newLocation = template.fill(params as any);

      if (history.location.pathname === newLocation) return;

      if (replace) {
        history.replace(newLocation);
      } else {
        history.push(newLocation);
      }
    },
    [template, history, replace]
  );

  return visit;
};

export default useNavigate;
