import Constants from "expo-constants";
import { View, StyleSheet, Pressable, Alert } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";

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
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    height: 100,
    backgroundColor: "#24292e",
    columnGap: 10,
  },
});

export default AppBar;
