import { useMutation } from "@apollo/client/react";
import { LOGIN } from "../graphql/mutation";
const useSigIn = () => {
  const [mutate, result] = useMutation(LOGIN);
  const signIn = async ({ username, password }) => {
    const response = await mutate({ variables: { username, password } });
    return response;
  };
  return [signIn];
};

export default useSigIn;
