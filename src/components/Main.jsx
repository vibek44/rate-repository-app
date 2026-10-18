import { View, StyleSheet } from "react-native";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import RepositoryList from "./Repository/index";
import SignIn from "./SignIn";
import { lightColors } from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightColors.backgroundColorMain,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<RepositoryList />} />
      </Routes>
    </View>
  );
};

export default Main;
