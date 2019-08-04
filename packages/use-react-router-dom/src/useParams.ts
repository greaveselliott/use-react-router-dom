import { useRouter } from ".";

const useParams = <T>(): T => {
  const { match } = useRouter<T>();
  return match.params;
};

export default useParams;
