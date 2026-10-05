//import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { View, StyleSheet, Text, Alert, Button } from "react-native";
import { useState } from "react";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    paddingLeft: 3,
    paddingRight: 3,
    alignItems: "center",
  },
  textItems: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 00,
  },
});

const Main = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.textItems}>Welcome to Repository App</Text>
      <Button
        style={styles.button}
        title="Display"
        onPress={() => setShow(!show)}
      />
      {show && <RepositoryList />}
    </View>
  );
};

export default Main;
