import useRouter from "./useRouter";

const useParams = <T>(): T => {
  const { match } = useRouter<T>();
  return match.params;
};

export default useParams;
