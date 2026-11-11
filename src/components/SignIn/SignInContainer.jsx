import { TextInput, View, StyleSheet, Pressable } from "react-native";
import Text from "../Text";
import { sizing, spacing, lightColors } from "../../theme";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Please enter valid username!")
    .required("username is required!"),
  password: Yup.string()
    .min(6, "Password must be 6 digit long!")
    .required("password is required!"),
});

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
    backgroundColor: lightColors.colorBlue,
    borderRadius: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
});

const SignInContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: SignInSchema,
    onSubmit: onSubmit,
  });

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          placeholder="UserName"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          style={[
            styles.item,
            formik.errors.username && { borderColor: lightColors.colorError },
          ]}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={{ color: lightColors.colorError }}>
            {formik.errors.username}
          </Text>
        )}
      </View>
      <View style={styles.subContainer}>
        <TextInput
          placeholder="Password"
          value={formik.values.password}
          secureTextEntry={true}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          style={[
            styles.item,
            formik.errors.password && { borderColor: lightColors.colorError },
          ]}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={{ color: lightColors.colorError }}>
            {formik.errors.password}
          </Text>
        )}
      </View>
      <Pressable style={styles.buttonWrapper} onPress={formik.handleSubmit}>
        <Text color="primary" fontWeight="bold" fontSize="subheading">
          SignIn
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInContainer;
