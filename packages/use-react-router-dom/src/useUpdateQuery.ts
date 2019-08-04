import queryString from "query-string";

interface UpdateQueryOptions {
  replace: boolean;
}

const USE_PUSH = { replace: false };

const useUpdateQuery = <T extends ParsedQuery>(
  options: UpdateQueryOptions = USE_PUSH
): UpdateQuery<T> => {
  const { history } = useRouter();
  const query = useQuery<T>();
  const { replace } = options;
  const updateQuery = useCallback(
    (patch: Partial<T>): void => {
      const newQuery = { ...query, ...patch };
      const newSearch = queryString.stringify(newQuery);
      if (replace) {
        history.replace({ search: newSearch });
      } else {
        history.push({ search: newSearch });
      }
    },
    [history, query, replace]
  );
  return updateQuery;
};

export default useUpdateQuery;
