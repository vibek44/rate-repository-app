import { useQuery } from "@apollo/client/react";
import {
  GET_REPOSITORIES,
  SINGLE_REPOSITORIES,
  REVIEW_REPOSITORIES,
} from "../graphql/queries";

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { orderBy, orderDirection, searchKeyword },
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

export const useReviewRepository = (id) => {
  const result = useQuery(REVIEW_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { id },
  });

  return result;
};
