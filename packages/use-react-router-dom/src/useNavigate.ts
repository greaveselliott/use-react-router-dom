import { useCallback } from "react";
import useRouter from "./useRouter";
import uriTemplates, { URITemplate } from "uri-templates";

type Navigation<T> = {
  visit: Visit<T>;
};

type UseNavigate<T> = (
  to: string | URITemplate,
  options?: {
    replace: boolean;
  }
) => Navigation<T>;

const useNavigate: UseNavigate<any> = (to, options = { replace: false }) => {
  const { history } = useRouter();
  const { replace } = options;
  const template = typeof to === "string" ? uriTemplates(to) : to;

  const visit = useCallback(
    (params): void => {
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

  return { visit };
};

export default useNavigate;
