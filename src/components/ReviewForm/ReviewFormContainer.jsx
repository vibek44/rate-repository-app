import Text from "../Text";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { useFormik } from "formik";

import * as Yup from "yup";
import { sizing, spacing, lightColors } from "../../theme";
const styles = StyleSheet.create({
  container: {
    padding: spacing.sm,
    rowGap: spacing.lg,
  },
  item: {
    height: sizing.base,
    borderRadius: spacing.md,
    borderWidth: 2,
    paddingHorizontal: spacing.md,
    flexDirection: "column",
  },
  buttonWrapper: {
    height: sizing.medium,
    backgroundColor: lightColors.backgroundColorSignIn,
    borderRadius: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
});

const ReviewFormContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      ownerName: "",
      repositoryName: "",
      rating: "",
      text: "",
    },
    onSubmit: onSubmit,
  });

  const { ownerName, repositoryName, rating, text } = formik.values;

  console.log(formik.errors);
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TextInput
          placeholder="Repository owner name"
          value={ownerName}
          onChangeText={formik.handleChange("ownerName")}
          onBlur={formik.handleBlur}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          placeholder="Repository  name"
          value={repositoryName}
          onChangeText={formik.handleChange("repositoryName")}
          onBlur={formik.handleBlur}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          placeholder="Rating between 0 and 100"
          value={rating}
          onChangeText={formik.handleChange("rating")}
          onBlur={formik.handleBlur}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          placeholder="Review"
          multiline={true}
          value={text}
          onChangeText={formik.handleChange("text")}
          onBlur={formik.handleBlur}
        />
      </View>
      <Pressable style={styles.buttonWrapper} onPress={formik.handleSubmit}>
        <Text color="primary" fontWeight="bold" fontSize="subheading">
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewFormContainer;
