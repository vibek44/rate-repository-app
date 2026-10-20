import { useMutation, useApolloClient } from "@apollo/client/react";
import { LOGIN } from "../graphql/mutation";
import AuthStorage from "../utils/authStorage";
import { useNavigate } from "react-router-native";

const authStorage = new AuthStorage();

const useSigIn = () => {
  const [mutate, result] = useMutation(LOGIN);
  const navigate = useNavigate();
  const client = useApolloClient();
  const signIn = async ({ username, password }) => {
    const {
      data: {
        authenticate: { accessToken },
      },
    } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(accessToken);
    client.resetStore();
    navigate("/");
  };
  return [signIn, result];
};

export default useSigIn;
