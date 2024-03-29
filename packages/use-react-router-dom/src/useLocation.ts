import useRouter from "./useRouter";
import { Location } from "history";

const useLocation = (): Location => {
  const { location } = useRouter();
  return location;
};

export default useLocation;
