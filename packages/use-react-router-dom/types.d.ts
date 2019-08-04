type UpdateQuery<T> = (patch: Partial<T>) => void;

type Visit<T> = (params: T) => void;

type ParsedQuery = queryString.ParsedQuery;

interface UpdateQueryOptions {replace} boolean;
}