import { View, StyleSheet } from "react-native";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e4e8",
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
