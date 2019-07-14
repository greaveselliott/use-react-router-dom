"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = <T>(): RouteComponentProps<T> =>
  useContext(RouterContext) as RouteComponentProps<T>;

export const useLocation = (): Location => {} {location} = useRouter();
  return location;
};

export const useParams = <T>(): T => {} {match} = useRouter<T>();
  return match.params;
};

export const useQuery = <T extends ParsedQuery>(): T => {} {search} = useLocation();
  const query = useMemo(() => queryString.parse(search), [search]);
  return query as T;
};

interface UpdateQueryOptions {replace} boolean;
}

type UpdateQuery<T> = (patch: Partial<T>) => void;

type Visit<T> = (params: T) => void;

const USE_PUSH = {replace} false };

export const useUpdateQuery = <T extends ParsedQuery>(
  options: UpdateQueryOptions = USE_PUSH
): UpdateQuery<T> => {} {history} = useRouter();
  const query = useQuery<T>();
  const {replace} = options;
  const updateQuery = useCallback(
    (patch: Partial<T>): void => {} newQuery = {...query} ...patch };
      const newSearch = queryString.stringify(newQuery);
      if (replace) {history.replace({ search: newSearch })}
      } else {history.push({ search: newSearch })}
      }
    },
    [history, query, replace]
  );
  return updateQuery;
};

export const useNavigate = <T>(
  to: string | URITemplate,
  options: UpdateQueryOptions = USE_PUSH
): Visit<T> => {} {history} = useRouter();
  const {replace} = options;
  const template = useMemo(() => {} (typeof to === "string") {} uriTemplate(to);
    }
    return to;
  }, [to]);
  const visit = useCallback(
    (params: T): void => {} newLocation = template.fill(params as any);
      if (replace) {history.replace(newLocation)}
      } else {history.push(newLocation)}
      }
    },
    [template, history, replace]
  );
  return visit;
};
</></></></></></></></></></></></></></></>;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJlbmNlLTIuanN4Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUmVmZXJlbmNlcy9yZWZlcmVuY2UtMi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFXYSxRQUFBLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUU7a0RBQ0wsQ0FBQyxDQUFDLENBQUM7OzJDQUVWLENBQ3pDLEFBRDBDLENBQ3BDLENBQUEsQ0FBRSxRQUFRLENBQUc7Ozs7eUJBSUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUNuQyxBQURvQyxDQUM5QixDQUFBLENBQUUsS0FBSyxDQUFHLFlBQVcsQ0FBQyxDQUFDLENBQUM7Ozs7d0JBSVIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQ3RELEFBRHVELENBQ2pELENBQUEsQ0FBRSxNQUFNLENBQUc7Ozs7OzZCQUtVLENBQzNCLE9BQU8sQ0FBRTs7O2dCQUdLLENBQUMsQ0FBQyxDQUFFLGtCQUFpQixDQUFDLENBQUMsQ0FBQzs7VUFFOUIsQ0FBQyxDQUFDLENBQUU7O2lCQUVHLENBQUUsT0FBTyxDQUFFOzs4QkFFRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztjQUV2QyxDQUFDLENBQUMsQ0FBRSxJQUFHLENBQ25CLEFBRG9CLENBQ2QsQ0FBQSxDQUFFLE9BQU8sQ0FBRzt3QkFDSSxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFFLE9BQU8sQ0FBRzs7bUJBRUQsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUMzQixBQUQ0QixDQUN0QixZQUFXLENBQUUsR0FBRyxLQUFLLENBQUU7O21CQUVoQixDQUNYLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FDeEM7YUFBTyxDQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FDckM7Ozs7Ozs7OzJCQU9xQixDQUFDLENBQUMsQ0FBQzs7O1FBR3RCLENBQUMsQ0FBQyxDQUFFLElBQUcsQ0FDYixBQURjLENBQ1IsQ0FBQSxDQUFFLE9BQU8sQ0FBRztRQUNaLENBQUUsT0FBTyxDQUFHO2lDQUNhLENBQzdCLEFBRDhCLENBQzNCLDBCQUF5QixDQUMxQixBQUQyQixDQUNwQjs7Ozs7eUJBS1ksQ0FDbkIsQUFEb0IsQ0FDZDttQkFDTyxDQUNYLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQzlCO2FBQU8sQ0FDTCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQjs7Ozs7OztBQU1OLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQUEifQ==