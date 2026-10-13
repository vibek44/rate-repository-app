import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";
import { sizing, darkColors, spacing } from "../theme";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text color="primary" fontSize="subheading" fontWeight="bold">
          Repositories
        </Text>
      </Link>

      <Link to="/signin">
        <Text color="primary" fontSize="subheading" fontWeight="bold">
          SignIn
        </Text>
      </Link>
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
