import { useQuery, useMutation } from "@apollo/client/react";
import { GET_CURRENT_USER } from "../graphql/queries";
import { CREATE_USER } from "../graphql/mutation";
import useSignIn from "./useSignIn";

const useUser = (includeReviews) => {
  const result = useQuery(GET_CURRENT_USER, { variables: { includeReviews } });
  return result;
};

export const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const createUser = async ({ username, password }) => {
    try {
      const response = await mutate({ variables: { username, password } });
      const usernameSame = response?.data?.createUser?.username;
      await signIn({ username: usernameSame, password });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  return [createUser, result];
};

export default useUser;
