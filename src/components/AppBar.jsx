import Constants from "expo-constants";
import { View, StyleSheet, Pressable } from "react-native";
import useUser from "../hooks/useUser";
import Text from "./Text";
import { Link, useNavigate } from "react-router-native";
import { sizing, darkColors, spacing } from "../theme";
import AuthStorage from "../utils/authStorage";
import { useApolloClient } from "@apollo/client/react";

const authStorage = new AuthStorage();

const AppBar = () => {
  const client = useApolloClient();
  const navigate = useNavigate();
  const { data } = useUser();
  const me = data?.me ?? null;

  const handleLogOut = async () => {
    await authStorage.removeAccessToken();
    client.clearStore();
    navigate("/signin");
  };
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text color="primary" fontSize="subheading" fontWeight="bold">
          Repositories
        </Text>
      </Link>
      {me ? (
        <Pressable onPress={handleLogOut}>
          <Text color="primary" fontSize="subheading" fontWeight="bold">
            SignOut
          </Text>
        </Pressable>
      ) : (
        <Link to="/signin">
          <Text color="primary" fontSize="subheading" fontWeight="bold">
            SignIn
          </Text>
        </Link>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    alignItems: "flex-end",
    height: sizing.large,
    backgroundColor: darkColors.backgroundColorAppBar,
    columnGap: spacing.lg,
  },
});

export default AppBar;
