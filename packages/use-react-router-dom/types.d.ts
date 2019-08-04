type UpdateQuery<T> = (patch: Partial<T>) => void;

type Visit<T> = (params: T) => void;
