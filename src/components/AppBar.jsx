import Constants from "expo-constants";
import { View, StyleSheet, Text } from "react-native";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text>Repositories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 100,
    backgroundColor: "#24292e",
  },
});

export default AppBar;
