import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES, SINGLE_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  return result;
};

export default useRepositories;

export const useSingleRepository = (id) => {
  const result = useQuery(SINGLE_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  });

  return result;
};
