import { useQuery, useMutation } from "@apollo/client/react";
import { ME } from "../graphql/queries";
import { CREATE_USER } from "../graphql/mutation";
import useSignIn from "./useSignIn";

const useUser = () => {
  const result = useQuery(ME);
  return result;
};

export const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const createUser = async ({ username, password }) => {
    try {
      const response = await mutate({ variables: { username, password } });
      const usernameSame = response?.data?.createUser?.username;
      console.log(usernameSame, "ok");
      await signIn({ username: usernameSame, password });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  return [createUser, result];
};

export default useUser;
