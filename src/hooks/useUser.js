import { useQuery } from "@apollo/client/react";
import { ME } from "../graphql/queries";

const useUser = () => {
  const result = useQuery(ME);

  return result;
};

export default useUser;
