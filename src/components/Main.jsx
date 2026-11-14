import { View, StyleSheet } from "react-native";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import RepositoryList from "./Repository/index";
import SignIn from "./SignIn/index";
import { lightColors } from "../theme";
import SingleRepository from "./Repository/SingleRepository";
import ReviewForm from "./ReviewForm";
import SignUp from "./SignUp";
import MyReviews from "./Repository/MyReviews";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightColors.colorGrey,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
        <Route path="/review" element={<ReviewForm />} />
        <Route path="/myreviews" element={<MyReviews />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<RepositoryList />} />
      </Routes>
    </View>
  );
};

export default Main;
