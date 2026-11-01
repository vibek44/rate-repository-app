import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { spacing, sizing, lightColors } from "../../theme";
import { useFormik } from "formik";
import * as Yup from "yup";
import Text from "../Text";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
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
  iconOverlay: {
    position: "absolute",
    right: 12,
    height: "100%",
    justifyContent: "center",
  },
});

export const signupSchema = Yup.object({
  username: Yup.string().required(" UserName is Requiired "),
  password: Yup.string().required("Password is Required"),
  repassword: Yup.string()
    .oneOf([Yup.ref("password")], "password must match")
    .required("Password confirmation  is required"),
});

const SignUpContainer = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      repassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: onSubmit,
  });
  const { username, password, repassword } = formik.values;
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="UserName"
          value={username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          style={[
            styles.item,
            formik.errors.username && { borderColor: "#FF6347" },
          ]}
        />

        {formik.touched.username && formik.errors.username && (
          <Text style={{ color: "#FF6347" }}>{formik.errors.username}</Text>
        )}
      </View>
      <View>
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          style={[
            styles.item,
            formik.errors.password && { borderColor: "#FF6347" },
          ]}
        />
        <TouchableOpacity
          style={styles.iconOverlay}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={22}
            color="#6b7280"
          />
        </TouchableOpacity>
        {formik.touched.password && formik.errors.password && (
          <Text style={{ color: "#FF6347" }}>{formik.errors.password}</Text>
        )}
      </View>

      <View>
        <TextInput
          placeholder="Password confirmation"
          secureTextEntry={!showRepassword}
          value={repassword}
          onChangeText={formik.handleChange("repassword")}
          onBlur={formik.handleBlur("repassword")}
          style={[
            styles.item,
            formik.errors.repassword && { borderColor: "#FF6347" },
          ]}
        />
        <TouchableOpacity
          style={styles.iconOverlay}
          onPress={() => setShowRepassword(!showRepassword)}
        >
          <Ionicons
            name={showRepassword ? "eye-outline" : "eye-off-outline"}
            size={22}
            color="#6b7280"
          />
        </TouchableOpacity>
        {formik.touched.repassword && formik.errors.repassword && (
          <Text style={{ color: "#FF6347" }}>{formik.errors.repassword}</Text>
        )}
      </View>

      <Pressable style={styles.buttonWrapper} onPress={formik.handleSubmit}>
        <Text color="primary" fontWeight="bold" fontSize="subheading">
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpContainer;
