//import { StatusBar } from "expo-status-bar";

import { View, StyleSheet } from "react-native";

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";

const Main = () => {
  return (
    <View>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
