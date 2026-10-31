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

export const reviewSchema = Yup.object({
  ownerName: Yup.string().required("Repository Owner name is Requiired "),
  repositoryName: Yup.string().required("Repository name is Required"),
  rating: Yup.number()
    .transform((value, originalValue) => {
      if (originalValue === "") return undefined;
      return typeof originalValue === "string"
        ? parseInt(originalValue, 10)
        : value;
    })
    .min(0)
    .max(100)
    .required("Rating is required"),
  text: Yup.string().max(200).optional(),
});

const ReviewFormContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      ownerName: "",
      repositoryName: "",
      rating: "",
      text: "",
    },
    validationSchema: reviewSchema,
    onSubmit: onSubmit,
  });

  const { ownerName, repositoryName, rating, text } = formik.values;

  //console.log(formik.touched);
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Repository owner name"
          value={ownerName}
          onChangeText={formik.handleChange("ownerName")}
          onBlur={formik.handleBlur("ownerName")}
          style={[
            styles.item,
            formik.errors.ownerName && { borderColor: "#FF6347" },
          ]}
        />
        {formik.touched.ownerName && formik.errors.ownerName && (
          <Text style={{ color: "#FF6347" }}>{formik.errors.ownerName}</Text>
        )}
      </View>
      <View>
        <TextInput
          placeholder="Repository  name"
          value={repositoryName}
          onChangeText={formik.handleChange("repositoryName")}
          onBlur={formik.handleBlur("repositoryName")}
          style={[
            styles.item,
            formik.errors.repositoryName && { borderColor: "#FF6347" },
          ]}
        />
        {formik.touched.repositoryName && formik.errors.repositoryName && (
          <Text style={{ color: "#FF6347" }}>
            {formik.errors.repositoryName}
          </Text>
        )}
      </View>

      <View>
        <TextInput
          keyboardType="numeric"
          placeholder="Rating between 0 and 100"
          value={rating}
          onChangeText={formik.handleChange("rating")}
          onBlur={formik.handleBlur("rating")}
          style={[
            styles.item,
            formik.errors.rating && { borderColor: "#FF6347" },
          ]}
        />
        {formik.touched.rating && formik.errors.rating && (
          <Text style={{ color: "#FF6347" }}>{formik.errors.rating}</Text>
        )}
      </View>
      <View>
        <TextInput
          placeholder="Review"
          multiline={true}
          value={text}
          onChangeText={formik.handleChange("text")}
          onBlur={formik.handleBlur("text")}
          style={[
            styles.item,
            formik.errors.text && { borderColor: "#FF6347" },
          ]}
        />
        {formik.touched.text && formik.errors.text && (
          <Text style={{ color: "#FF6347" }}>{formik.errors.text}</Text>
        )}
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
