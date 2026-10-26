import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  return result;
};

export default useRepositories;
