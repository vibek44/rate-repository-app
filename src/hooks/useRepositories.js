import { useQuery } from "@apollo/client/react";
import {
  GET_REPOSITORIES,
  SINGLE_REPOSITORIES,
  REVIEW_REPOSITORIES,
} from "../graphql/queries";

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  const variables = { first: 5, orderBy, orderDirection, searchKeyword };
  const { data, loading, fetchMore, error, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
      variables,
    }
  );
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories?.pageInfo?.hasNextPage;
    if (!canFetchMore) return;
    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };
  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
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
