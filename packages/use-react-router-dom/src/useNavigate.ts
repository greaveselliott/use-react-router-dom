import { useMemo, useCallback } from "react";
import { useRouter } from "./";
import uriTemplate, { URITemplate } from "uri-templates";

export const useNavigate = <T>(
  to: string | URITemplate,
  options: UpdateQueryOptions = { replace: false }
): Visit<T> => {
  const { history } = useRouter();
  const { replace } = options;

  const template = useMemo(
    () => (typeof to === "string" ? uriTemplate(to) : to),
    [to]
  );

  const visit = useCallback(
    (params: T): void => {
      const newLocation = template.fill(params as any);
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
