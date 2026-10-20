import { TextInput, View, StyleSheet, Pressable } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import Text from "./Text";
import { sizing, spacing, lightColors } from "../theme";
import useSigIn from "../hooks/useSignIn";

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
  username: Yup.string()
    .min(4, "Please enter valid username!")
    .required("username is required!"),
  password: Yup.string()
    .min(6, "Password must be 6 digit long!")
    .required("password is required!"),
});
const SignIn = () => {
  const [signIn] = useSigIn();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      const { username, password } = values;
      try {
        await signIn({ username, password });
      } catch (error) {
        console.log(error);
      }
    },
  });
  //console.log(formik);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          placeholder="UserName"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          style={[
            styles.item,
            formik.errors.username && { borderColor: "#FF6347" },
          ]}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={{ color: "#FF6347" }}>{formik.errors.username}</Text>
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
