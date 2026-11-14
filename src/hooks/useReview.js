import { useMutation, useApolloClient } from "@apollo/client/react";
import { useUser } from "./useUser";
import { CREATE_REVIEW, DELETE_REVIEW } from "../graphql/mutation";
import { useNavigate } from "react-router-native";

export const useDeleteReview = () => {
  const { refetch } = useUser(true);
  const [mutateDelete, result] = useMutation(DELETE_REVIEW);
  const removeReview = async (id) => {
    try {
      const response = await mutateDelete({ variables: { id } });
      const includeReviews = response?.data?.deleteReview;
      if (includeReviews) {
        await refetch();
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  return [removeReview, result];
};

export const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
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
