import { useQuery } from "@apollo/client/react";
import {
  GET_REPOSITORIES,
  SINGLE_REPOSITORIES,
  REVIEW_REPOSITORIES,
} from "../graphql/queries";

const useRepositories = (orderBy, orderDirection, searchKeyword) => {
  const variables = { first: 4, orderBy, orderDirection, searchKeyword };
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  });
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
  const variables = { id, first: 2 };
  const { data, loading, fetchMore, ...result } = useQuery(
    SINGLE_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
      variables,
    }
  );
  console.log(data);
  const fetchReviewMore = () => {
    const canFetchMore =
      !loading && data?.repository?.reviews?.pageInfo?.hasNextPage;
    if (!canFetchMore) return;
    fetchMore({
      variables: {
        after: data?.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repository: data?.repository,
    reviews: data?.repository?.reviews?.edges,
    fetchMore: fetchReviewMore,
    loading,
    ...result,
  };
};
