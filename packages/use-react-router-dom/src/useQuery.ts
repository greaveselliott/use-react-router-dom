import { useMemo } from "react";
import { parse, ParsedQuery } from "query-string";
import { useLocation } from ".";

const useQuery = <T extends ParsedQuery>(): T => {
  const { search } = useLocation();

  const query = useMemo(() => parse(search), [search]);
  return query as T;
};

export default useQuery;
