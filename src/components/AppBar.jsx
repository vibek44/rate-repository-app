import Constants from "expo-constants";
import { View, StyleSheet, Pressable, Alert } from "react-native";
import Text from "./Text";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert("Repository App")}>
        <Text color="primary" fontSize="subheading" fontWeight="bold">
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 100,
    backgroundColor: "#24292e",
    justifyContent: "flex-end",
  },
});

export default AppBar;
