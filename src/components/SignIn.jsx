import { TextInput, View, StyleSheet, Pressable } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import Text from "./Text";
import { sizing, spacing, lightColors } from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
  subContainer: {
    marginBottom: spacing.lg,
  },
  item: {
    height: sizing.base,
    borderRadius: spacing.md,
    borderWidth: 2,
    paddingHorizontal: spacing.md,
  },
  buttonWrapper: {
    height: sizing.medium,
    backgroundColor: lightColors.backgroundColorSignIn,
    borderRadius: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
});

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email!")
    .required("email is required!"),
  password: Yup.string()
    .min(6, "Password must be 6 digit long!")
    .required("password is required!"),
});
const SignIn = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  //console.log(formik);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          placeholder="Email"
          value={formik.values.username}
          onChangeText={formik.handleChange("email")}
          style={[
            styles.item,
            formik.errors.email && { borderColor: "#FF6347" },
          ]}
        />
        {formik.touched.email && formik.errors.email && (
          <Text style={{ color: "#FF6347" }}>{formik.errors.email}</Text>
        )}
      </View>
      <View style={styles.subContainer}>
        <TextInput
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          secureTextEntry={true}
          style={[
            styles.item,
            formik.errors.password && { borderColor: "#FF6347" },
          ]}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={{ color: "#FF6347" }}>{formik.errors.password}</Text>
        )}
      </View>
      <Pressable style={styles.buttonWrapper} onPress={formik.handleSubmit}>
        <Text color="primary" fontWeight="bold" fontSize="subheading">
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
