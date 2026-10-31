import { useMutation, useApolloClient } from "@apollo/client/react";
import { REVIEWS } from "../graphql/mutation";
import { useNavigate } from "react-router-native";

const useReview = () => {
  const [mutate, result] = useMutation(REVIEWS);
  const navigate = useNavigate();
  const client = useApolloClient();
  const review = async (values) => {
    const response = await mutate({ variables: values });
    const repositoryId = response?.data?.createReview?.repositoryId;
    console.log(repositoryId);
    await client.resetStore();
    navigate(`/repository/${repositoryId}`);
  };
  return [review, result];
};

export default useReview;
