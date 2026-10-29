import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { useFormik } from "formik";

const ReviewFormContainer = () => {
  const formik = useFormik({});
  return (
    <View>
      <TextInput placeholder="Repository owner name" />
      <TextInput placeholder="Repository  name" />
      <TextInput placeholder="Rating between 0 and 100" />
      <TextInput placeholder="Review" />
    </View>
  );
};

export default ReviewFormContainer;
